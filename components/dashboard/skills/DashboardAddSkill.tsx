import React, { useState } from 'react'
import DashboardAddSkillForm from './DashboardAddSkillForm';
import BackgroundBlobs from '../UI/BackgroundBlobs';
import CustomButton from '../UI/CustomButton';


// DASHBOARD ADD SKILL COMPONENT
const DashboardAddSkill = () => {
    const [showSkillForm, setShowSkillForm] = useState<boolean>(false);

    // HANDLE ADD SKILL FORM
    const handleOpenForm = () => {
        setShowSkillForm(true)
    };

    // HANDLE CLOSE SKILL FORM
    const handleCloseForm = () => {
        setShowSkillForm(false)
    };

    // HANDLE SUBMIT SKILL FORM
    const handleSubmitSkill = (skill: any) => {
        console.log('Skill added:', skill);
        setShowSkillForm(false);
    };


    return (
        <>
            <div className="relative flex justify-between items-center bg-white/5 backdrop-blur-xl p-2 sm:p-6 rounded-xl overflow-hidden border border-white/10 group hover:bg-white/10 transition-all duration-300">
                {/* BACKGROUND GRADIANTS BLOBS */}
                <BackgroundBlobs
                    primary="from-blue-500 to-purple-600"
                    secondary="from-cyan-500 to-blue-600"
                />

                {/* QUOTE TEXT */}
                <div className="flex-1 pr-2 sm:pr-6">
                    <div className="flex items-start gap-1">
                        <span className="text-4xl hidden sm:block text-blue-400/30 leading-none">"</span>
                        <p className="hidden sm:inline text-xl font-semibold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent font-mono leading-relaxed">
                            Every skill you acquire doubles your odds of success.
                        </p>

                        <p className="sm:hidden font-semibold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent font-mono leading-relaxed">
                            Upgrade your skill.
                        </p>
                        <span className="hidden sm:block text-4xl text-blue-400/30 leading-none">"</span>
                    </div>
                </div>

                {/* CUSTOM BUTTON */}
                <div className="flex-shrink-0">
                    <CustomButton
                        openForm={handleOpenForm}
                        className='rounded-xl'
                    >
                        Add New Skill
                    </CustomButton>
                </div>
            </div>

            {/* MODAL FORM */}
            {showSkillForm && (
                <DashboardAddSkillForm onSubmit={handleSubmitSkill} onClose={handleCloseForm} />
            )}
        </>
    )
}

export default DashboardAddSkill;