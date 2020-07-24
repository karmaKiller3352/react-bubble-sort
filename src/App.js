import React, { useState, useEffect } from 'react';
import './App.scss';
import { Button, Container, Row, Col } from 'react-bootstrap';
import View from './View';
import { bubbleSort } from './sorting';

function App() {
  const [collection, setCollection] = useState([]);
  const [mode, setMode] = useState('show');

  const generateCollection = (n, size) => {
    const arr = [];
    for (let i = 0; i < n; i += 1) {
      arr.push({
        height: Math.floor(Math.random() * Math.floor(size)),
      });
    }
    return arr;
  };

  useEffect(() => {
    if (mode === 'sort') {
      const sortProccessArr = bubbleSort([...collection]);
      function recurring(arr, i) {
        if (i === arr.length - 1) {
          setMode('show');
          return false;
        } else {
          setTimeout(() => {
            setCollection(arr[i]);
          }, 100);
        }
        recurring(arr, ++i);
      }
      recurring(sortProccessArr, 0);
      // (async function () {
      //   for (const stage of sortProccessArr) {
      //     await new Promise((resolve) => setTimeout(setCollection(stage), 200));
      //   }
      //   setMode('show');
      // })();
    }
  }, [mode, collection]);

  return (
    <div className='window'>
      <Container>
        <Row>
          <Col md={12}>
            <View arr={collection} />
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <Button
              onClick={() => setCollection(generateCollection(100, 350))}
              className='control-btn'
            >
              Generate
            </Button>
          </Col>
          <Col md={3}>
            <Button onClick={() => setMode('sort')} className='control-btn'>
              Sort
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default App;
