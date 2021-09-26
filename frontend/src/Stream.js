import { useEffect, useState } from 'react'
import AgoraRTC from 'agora-rtc-sdk'
import { AgoraVideoPlayer, createClient, createMicrophoneAndCameraTracks } from 'custom-agora-rtc-react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import { Controller } from 'react-bootstrap-icons'
import Controls from './components/Controls'


const useClient = createClient({mode: "rtc", codec: "vp8"})
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
    const client = useClient()
    const { ready, tracks } = useMicrophoneAndCameraTracks()

    useEffect(() => {
        client.join(config.appId, channelName, config.token, null)
            .catch(err => console.log('got err on join', err))
    }, [])

    const toggleChannel = async e => {
        console.log('================== check =', e.target.checked, '================')
        setShowStream(!showStream)

        if (!e.target.checked) {
            client.leave()
            .catch(err => console.log('got err on leave', err))
            client.removeAllListeners();
            tracks[0].close();
            tracks[1].close();
        } else {
            client.join(config.appId, channelName, config.token, null)
                .catch(err => console.log('got err on join', err))
        }
    }
      
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
          {(showStream && tracks) 
            ? <AgoraVideoPlayer videoTrack={tracks[1]} style={{height: '400px', width: '712px'}} className="mx-auto" />
            : <div style={{height: '400px', width: '712px'}}></div>}
        </>
    )
}
  