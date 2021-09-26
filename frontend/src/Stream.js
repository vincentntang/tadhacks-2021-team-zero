import { useEffect, useState } from 'react'
import AgoraRTC from 'agora-rtc-sdk'
import {  createClient, createMicrophoneAndCameraTracks } from 'custom-agora-rtc-react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import { Controller } from 'react-bootstrap-icons'
import Controls from './components/Controls'
import StreamPlayer from 'agora-stream-player'
// import StreamPlayer from 'agora-stream-player'

// <StreamPlayer stream={localStream} fit="contain" label="local" />
const useClient = createClient({mode: "live", codec: "vp8"})
// const useClient = AgoraRTC.createClient({
//     mode: "live",
//     codec: "vp8",
//   });
const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks()
const config = {
    appId: process.env.REACT_APP_APP_ID,
    token: process.env.REACT_APP_TEMP_TOKEN
}

export default function Stream() {
    const [channelName, setChannelName] = useState("main")
    const [showControls, setShowControls] = useState()

    return (
        <>
            {/* <h1 className="display-4">Stream</h1> */}
            {/* <Form.Select onChange={e => setChannelName(e.target.value)} style={{width: '12rem', display: 'inline-block'}}>
                <option value="main">Main Feed</option>
                <option value="secondary">Secondary Feed</option>
            </Form.Select> */}
            <VideoCall channelName={channelName} />
            {showControls && <Controls />}
            <div>
                <Button variant="outline-secondary" className="w-50 mx-auto d-block mt-4" onClick={() => setShowControls(!showControls)}>
                    <Controller className="me-2 mb-1" size={22} />
                    {`${showControls ? 'Hide' : 'Show'}`} Controls
                </Button>
            </div>
        </>
    );
}

const VideoCall = ({ channelName }) => {
    const [showStream, setShowStream] = useState(true)
    const [stream, setStream] = useState()
    const client = useClient()

    let streamID = null

    // audience is default
    // client.setClientRole('audience')

    // const { ready, tracks } = useMicrophoneAndCameraTracks()

    useEffect(() => {
        // client.join(config.appId, channelName, config.token, null)
        //     .catch(err => console.log('got err on join', err))

        client.on("stream-added", function(evt){
            console.log('================== stream add')
            // client.subscribe(evt.stream, handleError);
        });
        // Play the remote stream when it is subsribed
        client.on("stream-subscribed", function(evt){
            console.log('================== stream sub')
            // let stream = evt.stream;
            // let streamId = String(stream.getId());
            // addVideoStream(streamId);
            // stream.play(streamId);
        });
        // // Remove the corresponding view when a remote user unpublishes.
        // client.on("stream-removed", function(evt){
        //     console.log('================== stream removed')
        //     let stream = evt.stream;
        //     // let streamId = String(stream.getId());
        //     // stream.close();
        //     // removeVideoStream(streamId);
        // });
        // // Remove the corresponding view when a remote user leaves the channel.
        // client.on("peer-leave", function(evt){
        //     console.log('================== peer leave')
        //     // let stream = evt.stream;
        //     // let streamId = String(stream.getId());
        //     // stream.close();
        //     // removeVideoStream(streamId);
        // });
        
    }, [])

    useEffect(() => {
        console.log('cl', client)
        // function to initialise the SDK
        let init = async (name) => {
            console.log('================ what is name', name)
            await client.join(config.appId, channelName, config.token, null)
                .then(res => {
                    streamID = res
                    const stream = AgoraRTC.createStream({
                        streamID: res,
                        video: true,
                        audio: true
                    })
                    stream.init(() => {
                        setStream(stream)
                    })
                    console.log('setting stream id of', res)
                })
                .catch(err => console.log('got err on join', err))

            client.on("stream-added", function(evt){
                console.log('================== stream add')
                // client.subscribe(evt.stream, handleError);
            });
            // Play the remote stream when it is subsribed
            client.on("stream-subscribed", function(evt){
                console.log('================== stream sub')
                // let stream = evt.stream;
                // let streamId = String(stream.getId());
                // addVideoStream(streamId);
                // stream.play(streamId);
            });
            // Remove the corresponding view when a remote user unpublishes.
            client.on("stream-removed", function(evt){
                console.log('================== stream removed')
                let stream = evt.stream;
                // let streamId = String(stream.getId());
                // stream.close();
                // removeVideoStream(streamId);
            });
            // Remove the corresponding view when a remote user leaves the channel.
            client.on("peer-leave", function(evt){
                console.log('================== peer leave')
                // let stream = evt.stream;
                // let streamId = String(stream.getId());
                // stream.close();
                // removeVideoStream(streamId);
            });
        };
    
        console.log("======================== init ready");
        init(channelName);
    
    }, [client])

    function print() {
        console.log('=== stream', stream)
    }

    // const toggleChannel = async e => {
    //     console.log('================== check =', e.target.checked, '================')
    //     setShowStream(!showStream)

    //     if (!e.target.checked) {
    //         client.leave()
    //         .catch(err => console.log('got err on leave', err))
    //         client.removeAllListeners();
    //         tracks[0].close();
    //         tracks[1].close();
    //     } else {
    //         client.join(config.appId, channelName, config.token, null)
    //             .catch(err => console.log('got err on join', err))
    //     }
    // }
      
    return (
        <>
          {/* {ready && tracks && (
            <Form.Check 
                type="switch"
                inline
                disabled
                checked={showStream}
                onChange={toggleChannel}
            />
          )} */}
          <h1 onClick={print}>place</h1>
          {stream && <StreamPlayer
            key={streamID} 
            video={true} 
            audio={true} 
            stream={stream}
            fit="contain"
            label="Live Stream"  
            style={{width: '712px', height: '400px'}}
        />}
          {/* <AgoraVideoPlayer videoTrack={tracks[1]} style={{height: '400px', width: '712px'}} className="mx-auto" /> */}
          {/* {(showStream && tracks) 
            ? <AgoraVideoPlayer videoTrack={tracks[1]} style={{height: '400px', width: '712px'}} className="mx-auto" />
            : <div style={{height: '400px', width: '712px'}}></div>} */}
        </>
    )
}
  