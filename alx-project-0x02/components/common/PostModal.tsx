import React, { useState } from 'react';

interface PostModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (content: string) => void;
}

const PostModal: React.FC<PostModalProps> = ({ isOpen, onClose, onSubmit }) => {
    const [content, setContent] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (content.trim()) {
            onSubmit(content);
            setContent('');
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div style={styles.overlay}>
            <div style={styles.modal}>
                <button style={styles.closeButton} onClick={onClose}>
                    &times;
                </button>
                <form onSubmit={handleSubmit}>
                    <textarea
                        style={styles.textarea}
                        value={content}
                        onChange={e => setContent(e.target.value)}
                        placeholder="Write your post..."
                        rows={5}
                    />
                    <button type="submit" style={styles.submitButton}>
                        Post
                    </button>
                </form>
            </div>
        </div>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    overlay: {
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        background: 'rgba(0,0,0,0.4)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
    },
    modal: {
        background: '#fff',
        padding: 24,
        borderRadius: 8,
        minWidth: 320,
        position: 'relative',
        boxShadow: '0 2px 16px rgba(0,0,0,0.2)',
    },
    closeButton: {
        position: 'absolute',
        top: 8,
        right: 12,
        background: 'none',
        border: 'none',
        fontSize: 24,
        cursor: 'pointer',
    },
    textarea: {
        width: '100%',
        padding: 8,
        marginBottom: 12,
        borderRadius: 4,
        border: '1px solid #ccc',
        resize: 'vertical',
        fontSize: 16,
    },
    submitButton: {
        padding: '8px 16px',
        borderRadius: 4,
        border: 'none',
        background: '#0070f3',
        color: '#fff',
        fontWeight: 600,
        cursor: 'pointer',
        fontSize: 16,
    },
};

export default PostModal;