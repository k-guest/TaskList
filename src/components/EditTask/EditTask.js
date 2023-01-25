import './EditTask.scss';
import { useEffect, useState } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';

function EditTask ({ modal, toggle, updateTask, taskObj }) {

    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        
        if (name === "taskName") {
            setTaskName(value)
        } else {
            setTaskDescription(value)
        } 
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        let tempObj = {}
        tempObj['Name'] = taskName
        tempObj['Description'] = taskDescription
        updateTask(tempObj)
    }

    useEffect(() => {
        setTaskName(taskObj.Name)
        setTaskDescription(taskObj.Description)
    }, [])

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Update Task</ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label>Task Name</Label>
                        <Input
                            type="text"
                            value={taskName}
                            onChange={handleChange}
                            name = "taskName"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Description</Label>
                        <Input
                            rows="5"
                            type="textarea"
                            value={taskDescription}
                            onChange={handleChange}
                            name = "taskDescription"
                        />
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={handleUpdate}>Update</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    );
}

export default EditTask;