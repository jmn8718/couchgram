import React, { Component } from 'react';
import PouchDB from 'pouchdb';
import { fromJS, List } from 'immutable';
import { Button, Grid, Cell, Textfield } from 'react-mdl';


import logo from '../../logo.svg';
import './index.css';

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      db: undefined,
      input: '',
      total_rows: 0,
      rows: new List(),
      errors: undefined,
      files: undefined,
    };
  }

  componentWillMount() {
    this.setState({
      db: new PouchDB('testdb'),
    });
  }

  componentDidMount() {
    this.updateFromDb();
  }

  updateFromDb = () => {
    this.state.db.allDocs({include_docs: true, descending: true, attachments: true, binary:true}, (errors, docs) => {
      console.log(errors)
      console.log(docs)
      if (errors) {
        this.setState({ errors });
      }
      this.setState({
        total_rows: docs.total_rows,
        rows: fromJS(docs.rows.map((row) => {
          if (row.doc._attachments) {
            const newRow = Object.assign({}, row, { file: URL.createObjectURL(row.doc._attachments.file.data)})
            console.log(newRow)
            return newRow
          }
          return row
        })),
      });
    });
  }

  addTodo = (event) => {
    this.setState({ input: event.target.value });
  }

  onAdd = () => {
    const todo = {
      _id: new Date().toISOString(),
      title: this.state.input,
      completed: false,
    };
    this.state.db.put(todo, function callback(err, result) {
      if (!err) {
        console.log('Successfully posted a todo!');
      }
      console.log(result)
    });
    this.setState({ input: '' });
  }

  addFile = (event, files) => {
    this.setState({ files: event.target.files });
    const file = event.target.files[0];
    const todoWithAt = {
      _id: new Date().toISOString(),
      title: file.name,
      _attachments: {
        file: {
          content_type: file.type,
          data: file
        }
      }
    }
    this.state.db.put(todoWithAt).then((d) => console.log(d)).catch((error) => console.log(error))
  }

  renderRow = (row) => {
    console.log(row.get('doc').toJS())
    if (row.hasIn(['doc', '_attachments'])) {
      // this.state.db.getAttachment(row.get('id'), 'file')
      //   .then((blobOrBuffer) => console.log(blobOrBuffer, URL.createObjectURL(blobOrBuffer)))
      //   .catch((error) => console.log('error', error))
      // const src = URL.createObjectURL(row.getIn(['doc', '_attachments', 'file', 'data']))
      // console.log(src)
      return <div key={row.get('id')}>with at {row.get('id')} - <img src={row.get('file')} width="200" /></div>;
    } else {
      return <div key={row.get('id')}>{row.get('id')} - {row.getIn(['doc', 'title'], '__')}</div>;
    }
  }
  render() {
    return (
      <div className="App">        
        <div>{process.env.NODE_ENV}</div>
        <div>{process.env.REACT_APP_SECRET_CODE}</div>
        <Grid>
          <Cell col={10}>
            <Textfield
              onChange={this.addTodo}
              label="Text..."
              style={{width: '100%'}}
              value={this.state.input}
            />
            <input onChange={this.addFile} type="file" />
          </Cell>
          <Cell col={2}>
            <Button raised colored onClick={this.onAdd}>Add</Button>
          </Cell>
        </Grid>
        <Grid>
          <Cell col={2}>
            -
          </Cell>
          <Cell col={8}>
            {this.state.rows.map(this.renderRow)}
          </Cell>
          <Cell col={2}>
            -
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default HomeContainer;
