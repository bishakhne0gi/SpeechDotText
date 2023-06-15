import React, { useState } from 'react'
import './edit.css'
import { BsPlayFill } from "react-icons/bs";
import { BsStopFill } from "react-icons/bs";
import { SiConvertio } from 'react-icons/si';
import { HiLogout } from 'react-icons/hi'
import { BiReset } from 'react-icons/bi'

import 'regenerator-runtime/runtime'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';


const Edit = () => {


    const [resetValue, setResetValue] = useState(false);

    const {
        transcript,
        browserSupportsSpeechRecognition,
        resetTranscript
    } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }





    const startListerning = () => {

        SpeechRecognition.startListening({ continuous: true, language: 'en-IN' })
    }

    const stopListening = () => {
        SpeechRecognition.stopListening();
    }

    const resetListening = () => {
        resetTranscript();
    };

    return (
        <div className='background-overlay'>


            <div className='edit_blur_container'>

            </div>
            <div className='edit_blur_button'>
                <button className='edit_container_left_button' onClick={startListerning}><BsPlayFill size={30} color='white' /></button>
                <button className='edit_container_left_button' onClick={stopListening}><BsStopFill size={30} color='white' /></button>
                <button className='edit_container_left_button' onClick={resetListening}><BiReset size={30} color='white' /></button>
                <button className='edit_container_left_button'><SiConvertio size={30} color='white' /></button>
            </div>



            <div className='edit_container'>


                <div className="edit_container_left">

                </div>


                <div className='edit_container_right'>
                    <div className='edit_container_right_logout'>
                        <button className='edit_container_left_button'><HiLogout size={30} color='white' /></button>
                    </div>
                    <div className='edit_container_right_space'>
                        <div className="edit_container_right_space_text">

                            {transcript}
                        </div>

                    </div>
                </div>


            </div>
        </div>
    )
}

export default Edit