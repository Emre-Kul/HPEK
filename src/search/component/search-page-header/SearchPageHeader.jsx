import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import SearchPageForm from '../search-page-form/SearchPageForm.jsx'

import imgSearchHeaderLogo from '../../../../asset/img/search-header-logo.png'
import imgSearchHeaderHomeBackground from '../../../../asset/img/search-header-home-background.png'

import './search-page-header.scss'

export class SearchPageHeader extends Component {
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
      <div className="search-page-header"
           style={(this.props.isHomePage)
             ? homeBackgroundStyle
             : searchBackgroundStyle}>
        <div className={(this.props.isHomePage)
          ? null
          : 'search-page-header-content-background'}>
          <div className="search-page-header-content-container">
            <div className={(this.props.isHomePage)
              ? 'search-page-header-home-logo-container'
              : 'search-page-header-logo-container'}>
              <Link to="/">
                <img className={(this.props.isHomePage)
                  ? 'search-page-header-home-logo'
                  : 'search-page-header-logo'}
                     src={imgSearchHeaderLogo}
                     alt="Search Header Logo"/>
              </Link>
            </div>
            {(animateHeader || this.props.isHomePage) && (
              <div className={(animateHeader)
                ? 'search-page-header-slogan-container-animate'
                : 'search-page-header-slogan-container'}>
                <h1 className="search-header-slogan-title">
                  {'Lorem ipsum dolor sit!'}
                </h1>
                <p className="search-page-header-slogan-content">
                  {'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                </p>
              </div>)}
            <div className="search-page-header-form-container">
              <SearchPageForm/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchPageHeader