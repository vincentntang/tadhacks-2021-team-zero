import { useState, useEffect } from 'react';
import AgoraRTC, {
  IAgoraRTCClient, IAgoraRTCRemoteUser, MicrophoneAudioTrackInitConfig, CameraVideoTrackInitConfig, IMicrophoneAudioTrack, ICameraVideoTrack, ILocalVideoTrack, ILocalAudioTrack } from 'agora-rtc-sdk-ng';
export default function useAgora(client) {
  const [localVideoTrack, setLocalVideoTrack] = useState(undefined);
  const [localAudioTrack, setLocalAudioTrack] = useState(undefined);

  const [joinState, setJoinState] = useState(false);

  const [remoteUsers, setRemoteUsers] = useState([]);

  async function createLocalTracks(audioConfig, videoConfig) {
    const [microphoneTrack, cameraTrack] = await AgoraRTC.createMicrophoneAndCameraTracks(audioConfig, videoConfig);
    setLocalAudioTrack(microphoneTrack);
    setLocalVideoTrack(cameraTrack);
    return [microphoneTrack, cameraTrack];
  }

  async function join(appid, channel, token, uid) {
    if (!client) return;
    const [microphoneTrack, cameraTrack] = await createLocalTracks();
    
    await client.join(appid, channel, token || null);
    await client.publish([microphoneTrack, cameraTrack]);

    (window).client = client;
    (window).videoTrack = cameraTrack;

    setJoinState(true);
  }

  async function leave() {
    if (localAudioTrack) {
      localAudioTrack.stop();
      localAudioTrack.close();
    }
    if (localVideoTrack) {
      localVideoTrack.stop();
      localVideoTrack.close();
    }
    setRemoteUsers([]);
    setJoinState(false);
    await client?.leave();
  }

  useEffect(() => {
    if (!client) return;
    setRemoteUsers(client.remoteUsers);

    const handleUserPublished = async (user, mediaType) => {
        console.log('============ 1SUB')
      await client.subscribe(user, mediaType);
      // toggle rerender while state of remoteUsers changed.
      setRemoteUsers(remoteUsers => Array.from(client.remoteUsers));
    }
    const handleUserUnpublished = (user) => {
      setRemoteUsers(remoteUsers => Array.from(client.remoteUsers));
    }
    const handleUserJoined = (user) => {
        console.log('============ 1JOIN')
      setRemoteUsers(remoteUsers => Array.from(client.remoteUsers));
    }
    const handleUserLeft = (user) => {
      setRemoteUsers(remoteUsers => Array.from(client.remoteUsers));
    }
    client.on('user-published', handleUserPublished);
    client.on('user-unpublished', handleUserUnpublished);
    client.on('user-joined', handleUserJoined);
    client.on('user-left', handleUserLeft);

    client.on("stream-removed", function(evt){
        // let stream = evt.stream;
        // let streamId = String(stream.getId());
        // stream.close();
        // removeVideoStream(streamId);
    });
    // Remove the corresponding view when a remote user leaves the channel.
    client.on("peer-leave", function(evt){
        // let stream = evt.stream;
        // let streamId = String(stream.getId());
        // stream.close();
        // removeVideoStream(streamId);
    });
    
    
    const handleAdd = (evt) => {
        console.log('========== 2add', evt)
    }
    const handleSub = (evt) => {
        console.log('========== 2sub', evt)
    }

    client.on("stream-added", handleAdd);
    client.on("stream-subscribed", handleSub);

    return () => {
      client.off('user-published', handleUserPublished);
      client.off('user-unpublished', handleUserUnpublished);
      client.off('user-joined', handleUserJoined);
      client.off('user-left', handleUserLeft);

      client.off('stream-added', handleAdd);
      client.off('stream-subscribed', handleSub);
      client.off('stream-removed', () => console.log('remove'));
      client.off('peer-leave', () => console.log('leave'));
    };
  }, [client]);

  return {
    localAudioTrack,
    localVideoTrack,
    joinState,
    leave,
    join,
    remoteUsers,
  };
}