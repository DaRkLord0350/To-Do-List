import './App.css';
import Header from './components/Header';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';


function App() {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [data, setd] = useState([]);
  function add() {
    setd([...data, { name, text }]);
    setName("");
    setText("");
  }
  function remove(index) {
    let arr = data;
    arr.splice(index, 1);
    setd([...arr]);
  }
  return (
    <div className="App">
      <Header />
      <div className="text">
        <Stack spacing={2} direction="row">
          <TextField
            value={name}
            id="outlined-basic"
            label="Name"
            onChange={(x) => setName(x.target.value)}
            variant="outlined"
          />
          <TextField
            value={text}
            onChange={(x) => setText(x.target.value)}
            id="outlined-basic"
            label="text"
            variant="outlined"
          />
          <Button
            onClick={add}
            variant="contained">
            <AddCircleOutlineOutlinedIcon />
          </Button>
        </Stack>
      </div>
      <div className="storage">
        <div className="data">
          <h4>Name</h4>
          <h4>What To Do</h4>
          <h4>Remove</h4>
        </div>
        {
          data.map((item, index) => {
              {/* const key = {index}; */}
              <div className="data">
                <h4>{item.name}</h4>
                <h4>{item.text}</h4>
                <Stack>
                  <Button
                    onClick={() => remove(index)}
                    variant="contained" color="error">
                    <RemoveCircleRoundedIcon />
                  </Button>
                </Stack>
              </div>
            }
          )
        }
      </div>
    </div>
  );
}

export default App;
