import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import './search-form.scss'

export class SearchForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      query: '',
      location: '',
      redirect: false
    }
    this.handleSearchQueryInput = this.handleSearchQueryInput.bind(this)
    this.handleSearchLocationInput = this.handleSearchLocationInput.bind(this)
    this.handleSearchButtonClick = this.handleSearchButtonClick.bind(this)
  }

  componentWillUpdate () {
    if (this.state.redirect) {
      this.setState({
        redirect: false
      })
    }
  }

  handleSearchQueryInput (e) {
    this.setState({
      query: `${e.target.value.slice(0, 1).toUpperCase()}${e.target.value.slice(1)}`
    })
  }

  handleSearchLocationInput (e) {
    this.setState({
      location: `${e.target.value.slice(0, 1).toUpperCase()}${e.target.value.slice(1)}`
    })
  }

  handleSearchButtonClick (e) {
    e.preventDefault()
    if (this.state.location.length !== 0 && this.state.query.length !== 0) {
      this.setState({
        redirect: true
      })
    }
  }

  render () {
    const searchLink = `/search/${this.state.query}/${this.state.location}`
    return (
      <form className="search-form">
        <input className="search-form-query-input search-form-input"
               type="text"
               placeholder="I'm looking for"
               onInput={this.handleSearchQueryInput}/>
        <input className="search-form-location-input search-form-input"
               type="text"
               placeholder="Place"
               onInput={this.handleSearchLocationInput}/>
        <button className="search-form-button"
                onClick={this.handleSearchButtonClick}/>
        {(this.state.redirect && <Redirect to={searchLink}/>)}
      </form>
    )
  }
}

export default SearchForm