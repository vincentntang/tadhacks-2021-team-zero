import { useEffect, useState } from 'react'
import AgoraRTC from 'agora-rtc-sdk'
import { AgoraVideoPlayer, createClient, createMicrophoneAndCameraTracks } from 'custom-agora-rtc-react'

export default function Stream() {

    const [inCall, setInCall] = useState(false)
    const [channelName, setChannelName] = useState("team0")

    const useClient = createClient({mode: "live", codec: "vp8"})
    const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks()

    const client = useClient()
    const { ready, tracks } = useMicrophoneAndCameraTracks()

    useEffect(() => {
        // client.join(process.env.REACT_APP_APP_ID, 'team0', null, null);
    }, [])

    useEffect(() => {
        // console.log('client', client)
    }, [client])

    return (
        <>
            <>
                <h1 className="display-4">Stream</h1>
            </>
            {inCall ? (
                // <VideoCall setInCall={setInCall} channelName={channelName} />
                <AgoraVideoPlayer videoTrack={tracks[1]} style={{height: '50px', width: '80px', border: '1px solid red'}} />
            ) : (
                <div></div>
                // <ChannelForm setInCall={setInCall} setChannelName={setChannelName} />
            )}
            {/* {ready && } */}
        </>
    );
}
