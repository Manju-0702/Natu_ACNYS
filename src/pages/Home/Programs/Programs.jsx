import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Program.css';
import program_1 from '../../../assets/program-1.png';
import program_2 from '../../../assets/program-2.png';
import program_3 from '../../../assets/program-3.png';
import program_icon_1 from '../../../assets/program-icon-1.png';
import program_icon_2 from '../../../assets/program-icon-2.png';
import program_icon_3 from '../../../assets/program-icon-3.png';

const Programs = () => {
    const navigate = useNavigate();

    return (
        <div className='programs'>
            {/* Graduation Degree - Navigates to UG.jsx */}
            <div className="program" onClick={() => navigate('/department/ug')} style={{ cursor: "pointer" }}>
                <div className="image-container">
                    <img src={program_1} alt="Graduation Degree" />
                    <div className="caption">
                        <img src={program_icon_1} alt="Graduation Icon" />
                        <p>UG</p>
                    </div>
                </div>
            </div>

            {/* Master Degree - Navigates to PG.jsx */}
            <div className="program" onClick={() => navigate('/department/pg')} style={{ cursor: "pointer" }}>
                <div className="image-container">
                    <img src={program_2} alt="Master Degree" />
                    <div className="caption">
                        <img src={program_icon_2} alt="Master Icon" />
                        <p>PG</p>
                    </div>
                </div>
            </div>

            {/* Post Graduation - Navigates to Academics.jsx */}
            <div className="program" onClick={() => navigate('/academics')} style={{ cursor: "pointer" }}>
                <div className="image-container">
                    <img src={program_3} alt="Post Graduation" />
                    <div className="caption">
                        <img src={program_icon_3} alt="Post Graduation Icon" />
                        <p>Acedemics</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Programs;
