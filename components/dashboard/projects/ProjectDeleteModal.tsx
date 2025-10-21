import React from 'react'
import { ModalFrame } from '../UI/UiElements'
import BackgroundBlobs from '../UI/BackgroundBlobs';


interface ProjectDeleteModalProps {
    onClose: () => void;
    onDelete: () => void;
};

const ProjectDeleteModal: React.FC<ProjectDeleteModalProps> = ({
    onClose,
    onDelete
}) => {
    return (
        <ModalFrame showClosIcon={false} >
            <BackgroundBlobs
                primary="from-blue-500 to-purple-600"
                secondary="from-cyan-500 to-blue-600"
            />
            <h3 className="text-lg font-semibold text-white mb-2">Are you sure?</h3>
            <p className="text-sm text-gray-300 mb-6">
                Do you really want to delete this project? This action cannot be undone.
            </p>

            <div className="flex items-center justify-end gap-3">
                <button
                    onClick={onClose}
                    className="px-4 py-2 rounded-lg bg-white/5 text-gray-300 hover:bg-white/10 transition-colors cursor-pointer"
                >
                    Cancel
                </button>
                <button
                    onClick={onDelete}
                    className="px-4 py-2 rounded-lg bg-red-600 text-white hover:brightness-90 transition-colors cursor-pointer"
                >
                    Delete
                </button>
            </div>
        </ModalFrame>
    )
}

export default ProjectDeleteModal