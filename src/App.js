// import NavBar from './ui-components/NavBar';
// import NoteUICollection from './ui-components/NoteUICollection';
// import CreateNote from './ui-components/CreateNote';
// import UpdateNote from './ui-components/UpdateNote';
import { useState } from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { DataStore } from 'aws-amplify';
import { NavBar, NoteUICollection, CreateNote, UpdateNote } from './ui-components';
import './index.css';

function App({ signOut}) {
  const [showCreateNote, setShowCreateNote] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [updateNote, setUpdateNote] = useState();

  return (
    <>
      <NavBar width='100%' marginBottom='20px' overrides={{
        Button31632483: { onClick: () => setShowCreateNote(true)},
        Button31632487: { onClick: async() => {
          //clears data as user signout.
          await DataStore.clear();
          signOut()} }
      }}/>
      <div className='container'>
      <NoteUICollection overrideItems={({item, idx}) => { 
        return {
          overrides: {
            Vector31472745: {
              onClick: () => {
                setShowUpdateModal(true);
                setUpdateNote(item);
              }

            }
          }
        }
      }}/>
      </div>
      <div className='modal' style={{display: showCreateNote === false && 'none'}}>
        <CreateNote overrides={{  
          MyIcon: {
            as: 'button',
            onClick: () => setShowCreateNote(false) 
          }
          }}/>
      </div>
      <div className='modal' style={{display: showUpdateModal === false && 'none'}}>
        <UpdateNote notes={updateNote} overrides={{
          MyIcon: {
            as: 'button',
            onClick: () => setShowUpdateModal(false)
          }
        }}/>
      </div>
    </>
  );
}

export default withAuthenticator(App);
