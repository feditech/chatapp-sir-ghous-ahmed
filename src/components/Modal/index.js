import { useState, useEffect, useParams } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { db, doc, getDocs, collection, query, where, setDoc, onSnapshot, addDoc, orderBy } from '../../config/Firebase.js'
import './css/style.css'
import Select from 'react-select'

function Modal1({ userid }) {
    
    const uid = userid;
    const [users, setUsers] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [optionsState, setOptionState] = useState("")
    const [selectedMember, setSelectedMember] = useState([])

    const getAllUsers = async () => {
        const docRef = query(collection(db, "users"), where("uid", '!=', uid));
        const querySnapshot = await getDocs(docRef);
        let arr = [];
        querySnapshot.forEach((doc) => {
            arr.push(doc.data())
        });
        setUsers(arr)
    }
    useEffect(() => {
        getAllUsers()
    }, [])

    const options = users.map((v, index) => {
  
        return {
           label: v.fullName,
           value: v.uid,
           key: index
        }
  
    })
   
    return (
   
   
   <>
    
            <Button variant="primary" onClick={handleShow}>
                Add a Group
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Group</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* <input type="text" placeholder="Enter Group name" />
                    <br />
                    <ul className="memberlist">
                    {
                            selectedMember.map((v, i) => {
                                return (
                                    <li key = {i} >{v.fullName}</li>
                                )
                            }) }            
                    </ul>
                    <select   >
                        <option selected> Add members </option>
                        {
                            users.map((v, i) => {

                                return (
                                    <option value={v.fullName} > {v.fullName} </option>
                                )
                            })
                        }

                    </select> <button onClick={() => { setSelectedMember() } } > add </button> */}

<Select
      value={selectedOption}
      onChange={this.handleChange}
      options={options}
   />

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Done
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Modal1;