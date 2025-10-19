import React, { useState } from 'react'
import AddButon from '../common/AddButon'
import DashboardAddSkillForm from './DashboardAddSkillForm';

// DASHBOARD ADD SKILL COMPONENT
const DashboardAddSkill = () => {
    const [showAddSkillForm, setShowAddSkillForm] = useState<boolean>(false);

    const handleAddSkillForm = () => {
        setShowAddSkillForm(true)
    }

    const handleCloseForm = () => {
        setShowAddSkillForm(false)
    }

    const handleSubmitSkill = (skill: any) => {
        console.log('Skill added:', skill);
        // API call বা state update করুন
        setShowAddSkillForm(false); // Form close করুন
    }

    return (
        <>
            {/* Quote Card with Add Button - Always Visible */}
            <div className="relative flex justify-between items-center bg-white/5 backdrop-blur-xl p-6 rounded-xl overflow-hidden border border-white/10 group hover:bg-white/10 transition-all duration-300">
                {/* Background Gradient Blobs */}
                <div className="absolute inset-0 -z-10 pointer-events-none">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-full blur-3xl opacity-15 group-hover:opacity-25 transition-opacity"></div>
                </div>

                {/* Quote Text */}
                <div className="flex-1 pr-6">
                    <div className="flex items-start gap-1">
                        <span className="text-4xl text-blue-400/30 leading-none">"</span>
                        <p className="text-xl font-semibold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent font-mono leading-relaxed">
                            Every skill you acquire doubles your odds of success.
                        </p>
                        <span className="text-4xl text-blue-400/30 leading-none">"</span>
                    </div>
                </div>

                {/* Add Button */}
                <div className="flex-shrink-0">
                    <AddButon
                        openForm={handleAddSkillForm}
                        className='rounded-xl'
                    >
                        Add New Skill
                    </AddButon>
                </div>
            </div>

            {/* Modal - Form */}
            {showAddSkillForm && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center"
                    onClick={handleCloseForm} // Click outside to close
                >
                    <div onClick={(e) => e.stopPropagation()}> {/* Prevent close when clicking form */}
                        <DashboardAddSkillForm
                            onSubmit={handleSubmitSkill}
                            onClose={handleCloseForm}
                        />
                    </div>
                </div>
            )}
        </>
    )
}

export default DashboardAddSkill