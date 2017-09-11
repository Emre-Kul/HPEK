import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import SearchForm from '../search-form/SearchForm.jsx'

import imgSearchHeaderLogo from '../../../../asset/img/search-header-logo.png'
import imgSearchHeaderHomeBackground from '../../../../asset/img/search-header-home-background.png'

import './search-header.scss'

export class SearchHeader extends Component {
  static propTypes = {
    isHomePage: PropTypes.bool,
    animateHeaderAtSearch: PropTypes.bool,
    searchHeaderPhoto: PropTypes.string
  }

  render () {
    let animateHeader = (!this.props.isHomePage && this.props.animateHeaderAtSearch)
    const homeBackgroundStyle = {
      'backgroundImage': `url('${imgSearchHeaderHomeBackground}')`
    }
    const searchBackgroundStyle = {
      'backgroundImage': `url('${this.props.searchHeaderPhoto}')`
    }
    return (
      <div className="search-header"
           style={(this.props.isHomePage)
             ? homeBackgroundStyle
             : searchBackgroundStyle}>
        <div className={(this.props.isHomePage)
          ? null
          : 'search-header-content-background'}>
          <div className="search-header-content-container">
            <div className={(this.props.isHomePage)
              ? 'search-header-home-logo-container'
              : 'search-header-logo-container'}>
              <Link to="/">
                <img className={(this.props.isHomePage)
                  ? 'search-header-home-logo'
                  : 'search-header-logo'}
                     src={imgSearchHeaderLogo}
                     alt="Search Header Logo"/>
              </Link>
            </div>
            {(animateHeader || this.props.isHomePage) && (
              <div className={(animateHeader)
                ? 'search-header-slogan-container-animate'
                : 'search-header-slogan-container'}>
                <h1 className="search-header-slogan-title">
                  {'Lorem ipsum dolor sit!'}
                </h1>
                <p className="search-header-slogan-content">
                  {'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                </p>
              </div>)}
            <div className="search-header-form-container">
              <SearchForm/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchHeader