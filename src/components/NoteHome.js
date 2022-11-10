import React, { useState } from 'react';
import '../index.css';
import Amplify, { DataStore, API, Auth} from 'aws-amplify';
import { NavBar, NoteUICollection, CreateNote, UpdateNote } from '../ui-components';


export default function NoteHome({handleLogOut}) {
    const [showCreateNote, setShowCreateNote] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [updateNote, setUpdateNote] = useState();
    return (
    <div>
      <NavBar width='100%' marginBottom='20px' overrides={{
        Button31632483: { onClick: () => setShowCreateNote(true)},
        Button31632487: { onClick: async() => {
          //clears data as user signout.
          console.log('signout');
          await DataStore.clear();
          handleLogOut();
         }}
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
    </div>
    )
};