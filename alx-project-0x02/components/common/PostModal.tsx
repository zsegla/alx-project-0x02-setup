import React, { useState } from 'react';
import './PostModal.css';

interface PostModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (title: string, content: string) => void;
}

const PostModal: React.FC<PostModalProps> = ({ isOpen, onClose, onSubmit }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (title.trim() && content.trim()) {
            onSubmit(title, content);
            setTitle('');
            setContent('');
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div className="post-modal-overlay">
            <div className="post-modal">
                <button className="post-modal-close-button" onClick={onClose}>
                    &times;
                </button>
                <form onSubmit={handleSubmit}>
                    {/* ✅ Required input field */}
                    <input
                        type="text"
                        className="post-modal-input"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Title"
                    />

                    <textarea
                        className="post-modal-textarea"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Write your post..."
                        rows={5}
                    />
                    <button type="submit" className="post-modal-submit-button">
                        Post
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PostModal;