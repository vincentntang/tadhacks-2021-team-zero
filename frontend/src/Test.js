import React, { useState } from 'react';
import AgoraRTC from 'agora-rtc-sdk-ng';
import useAgora from './hooks/useAgora';
import MediaPlayer from './components/MediaPlayer';

const client = AgoraRTC.createClient({ codec: 'h264', mode: 'rtc' });

// TODO: remove duplication
const config = {
    appId: process.env.REACT_APP_APP_ID,
    token: process.env.REACT_APP_TEMP_TOKEN,
    channel: 'main'
}

export default function Test() {
  const [ appid, setAppid ] = useState(process.env.REACT_APP_APP_ID || '');
  const [ token, setToken ] = useState(process.env.REACT_APP_TEMP_TOKEN || '');
  const [ channel, setChannel ] = useState('main')
  const {
    localAudioTrack, localVideoTrack, leave, join, joinState, remoteUsers
  } = useAgora(client);


  console.log('user', remoteUsers)
  return (
    <div className='call my-5'>
    <div className='button-group'>
        <button id='join' type='button' className='btn btn-primary btn-sm me-2' disabled={joinState} onClick={() => {join(config.appId, config.channel, config.token)}}>Join</button>
        <button id='leave' type='button' className='btn btn-primary btn-sm' disabled={!joinState} onClick={() => {leave()}}>Leave</button>
    </div>
      <div className='player-container my-2'>
        <div className='local-player-wrapper'>
          <p className='local-player-text'>{localVideoTrack && `local, ID =`}{joinState && localVideoTrack ? `${client.uid || ''}` : ''}</p>
          <MediaPlayer videoTrack={localVideoTrack} audioTrack={undefined}></MediaPlayer>
        </div>
        {remoteUsers.map(user => (<div className='remote-player-wrapper' key={user.uid}>
            <p className='remote-player-text'>{`ID = ${user.uid}`}</p>
            <MediaPlayer videoTrack={user.videoTrack} audioTrack={user.audioTrack}></MediaPlayer>
          </div>))}
      </div>
    </div>
  );
}