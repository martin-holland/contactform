import React from 'react';

function Notes(notes) {
    return (
        <div className="notes">
            {notes.firstname} {notes.lastname}: {notes.role} | Phone: {notes.telnumber} | <strong>{notes.message}</strong>
        </div>
    );
}

export default Notes;