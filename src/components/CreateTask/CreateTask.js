import './CreateTask.scss';
import { useState } from 'react';
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

function CreateTask ({ modal, toggle, save }) {

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
    const handleSave = () => {
        let taskObj = {}
        taskObj["Name"] = taskName
        taskObj["Description"] = taskDescription
        save(taskObj)
    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>
                Create Task
            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label for="exampleEmail">
                            Task Name
                        </Label>
                        <Input
                            type="text"
                            value={taskName}
                            onChange={handleChange}
                            name = "taskName"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">
                            Description
                        </Label>
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
                <Button color="primary" onClick={handleSave}>
                    Create
                </Button>{' '}
                <Button color="secondary" onClick={toggle}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    );
}

export default CreateTask;