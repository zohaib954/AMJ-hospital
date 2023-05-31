import React from 'react'
import "./featuresPanel.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faHospitalUser,
    faHouseMedicalCircleCheck,
    faBed,
    faStethoscope,
    faRecycle,
    faPrescriptionBottle,
    faEarDeaf,
    faHeadSideVirus}
    from '@fortawesome/free-solid-svg-icons'

function FeaturesPanel() {
  return (
    <div className='featuresPanel'>
        <div className="features-heading">
            <h3>Features</h3>
        </div>

        <div className="features-container">
            <div className="features-inner-container">
                <div className="features-card-container">
                    <div className="feature-card">
                        <div className='features-icon'><FontAwesomeIcon icon={faHospitalUser} /></div>
                        <div className="features-border"></div>
                        <div className="features-text">
                            <p>Reception and Registration counter</p>
                        </div>
                    </div>
                    <div className="feature-card">
                        <div className='features-icon'><FontAwesomeIcon icon={faHouseMedicalCircleCheck} /></div>
                            <div className="features-border"></div>
                            <div className="features-text">
                                <p>Spacious OPD complex each for every specialty with good seating arrangement</p>
                            </div>
                    </div>
                    <div className="feature-card">
                        <div className='features-icon'><FontAwesomeIcon icon={faBed} /></div>
                            <div className="features-border"></div>
                            <div className="features-text">
                                <p>Spacious OPD complex each for every specialty with good seating arrangement</p>
                            </div>
                        </div>
                    <div className="feature-card">
                            <div className='features-icon'><FontAwesomeIcon icon={faStethoscope} /></div>
                            <div className="features-border"></div>
                            <div className="features-text">
                                <p>Diagnostic facilities – ECG, X-ray, Sonography, Central Clinical Laboratory (CCL)</p>
                            </div>
                    </div>
                </div>
                <div className="features-card-container">
                    <div className="feature-card">
                            <div className='features-icon'><FontAwesomeIcon icon={faRecycle} /></div>
                            <div className="features-border"></div>
                            <div className="features-text">
                                <p>Bio- medical waste management</p>
                            </div>
                    </div>
                    <div className="feature-card">
                            <div className='features-icon'><FontAwesomeIcon icon={faPrescriptionBottle} /></div>
                            <div className="features-border"></div>
                            <div className="features-text">
                                <p>Sudhatatva Ayurved Pharmacy – FDA & GMP approved Ayurved pharmacy</p>
                            </div>
            
                    </div>
                    <div className="feature-card">
                            <div className='features-icon'><FontAwesomeIcon icon={faEarDeaf} /></div>
                            <div className="features-border"></div>
                            <div className="features-text">
                                <p>Kriya-kalp section – For Ayurved treatment of diseases related to ear, nose, throat, eyes.</p>
                            </div>

                    </div>
                    <div className="feature-card">
                            <div className='features-icon'><FontAwesomeIcon icon={faHeadSideVirus} /></div>
                            <div className="features-border"></div>
                            <div className="features-text">
                                <p>A dedicated Paralysis Ayurved Treatment Centre</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        

    </div>
  )
}

export default FeaturesPanel