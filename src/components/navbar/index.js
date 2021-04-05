// // #region Modules
// import React, {
//     useState,
//     useEffect
// } from 'react'
// import PropTypes from 'prop-types'
// import { withRouter } from 'react-router'
// import FAIcon from 'react-fontawesome'
// import visionLogo from 'img/vision-logo-2-blue.png'
// // #endregion

// // #region Navbars
// import { SlidesNavbar } from 'apps/slides/router'
// import { SchoolsNavbar } from 'apps/schools/router'
// import { StopsNavbar } from 'apps/stops/router'
// import { StatsNavbar } from 'apps/stats/router'
// import { CryptonNavbar } from 'apps/crypton/router'
// import { StudioNavbar } from 'apps/studio/router'
// import { IdentityNavBar } from 'apps/identity/router'
// import { CoreNavbar } from 'apps/core/router'
// // #endregion

// // #region  Prop Types
// const propTypes = {
//     onToggle: PropTypes.func.isRequired,
//     openVideoModal: PropTypes.func.isRequired
// }

// const defaultProps = {
//     isExpanded: true,
//     onToggle: () => console.log('<Navbar>.onToggle UNDEFINED'),
//     openVideoModal: () => console.log('<Navbar>.openVideoModal UNDEFINED')
// }
// // #endregion

// export const Navbar = (props) => {
//     // #region STATE
//     const [items, setItems] = useState([])
//     const [isExpanded, setIsExpanded] = useState(localStorage.getItem('isNavbarExpanded'))
//     const [isHidden, setIsHidden] = useState(false)
//     const [isLoading, setIsLoading] = useState(false)
//     const [appName, setAppName] = useState('studio')
//     const [activeTab, setActiveTab] = useState(null)
//     const { onToggle, openVideoModal, history } = props
//     const bottomItems = [
//         {
//             label: 'Help',
//             path: 'help',
//             onClick: openVideoModal,
//             faIcon: 'question-circle'
//         },
//         {
//             label: 'Settings',
//             path: 'settings',
//             faIcon: 'cog'
//         },
//         { separator: true },
//         {
//             label: isExpanded ? 'Collapse' : '',
//             onClick: () => {
//                 setIsExpanded(!isExpanded)
//                 localStorage.setItem('isNavbarExpanded', !isExpanded)
//             },
//             faIcon: isExpanded ? 'chevron-left' : 'chevron-right',
//             id: 'navbar-toggle'
//         }
//     ]
//     // #endregion

//     // #region LIFECYCLE
//     useEffect(() => {
//         adaptToPath()
//     }, [])
//     useEffect(() => {
//         history.listen((location) => {
//             adaptToPath()
//         })
//     }, [history])
//     // #endregion

//     // #region MISC
//     const isActiveTab = (name) => window.location.pathname.split('/').pop() === name

//     const goTo = (path) => (e) => {
//         history.push(path)
//         adaptToPath()
//     }

//     const adaptToPath = () => {
//         const { pathname } = history.location
//         const pathArray = pathname.split('/')
//         const scopeName = pathArray[1]
//         const newAppName = pathArray[2]
//         const activeTab = pathArray[3]
//         const { location } = props.history

//         // setIsLoading(true)
//         // setTimeout(() => setIsLoading(false), 1000)

//         setAppName(newAppName)
//         setActiveTab(activeTab)
//         setIsHidden(
//             ['web', 'auth'].includes(scopeName) ||
//             activeTab === 'login' ||
//             appName === 'statum'
//         )

//         console.log({
//             pathArray,
//             scopeName,
//             appName,
//             activeTab,
//             isHidden
//         })

//         let items = []
//         switch (newAppName) {
//         case 'slides':
//             items = SlidesNavbar
//             break
//         case 'schools':
//             items = SchoolsNavbar
//             break
//         case 'stops':
//             items = StopsNavbar
//             break
//         case 'stats':
//             items = StatsNavbar
//             break
//         case 'studio':
//             items = StudioNavbar
//             break
//         case 'identity':
//             items = IdentityNavBar
//             break
//         case 'crypton':
//             items = CryptonNavbar
//             break
//         case 'core':
//             items = CoreNavbar
//             break
//         default:
//             items = []
//             break
//         }

//         setItems(items)
//     }
//     // #endregion

//     // #region  RENDER
//     return isHidden
//         ? null
//         : <div className={`navbar ${isExpanded ? 'expanded' : ''} space-between`}>
//             <div>
//                 <div className='item flex-row' onClick={ onToggle }>
//                     <img src={ visionLogo } />
//                     <div>{ appName }</div>
//                 </div>
//                 {
//                     isLoading
//                         ? <div className='loader' />
//                         : items.map((item, i) => item.separator
//                             ? <div key={ i } className='divider horizontal' />
//                             : <div key={ i }
//                                 title={ item.label }
//                                 id={ `navbar-item-${item.label}` }
//                                 className={`item ${item.path === `/app/${appName}/${activeTab}` ? 'active' : ''}`}>
//                                 <div
//                                     className='flex-row'
//                                     onClick={ goTo(item.path) }
//                                 >
//                                     <FAIcon name={ item.faIcon } />
//                                     {
//                                         isExpanded && <div>{ item.label }</div>
//                                     }
//                                 </div>
//                                 <div className={ `children ${isExpanded && item.path === `/app/${appName}/${activeTab}` ? 'expanded' : ''}`}>
//                                     {
//                                         // TODO: make recursive
//                                         (item.children || []).map((child, i) => (
//                                             <div
//                                                 key={ i }
//                                                 className={`child ${(child.isActive) ? 'active' : ''}`}
//                                                 onClick={ goTo(child.path) }
//                                             >
//                                                 <div className='flex-row' style={{ overflow: 'hidden', height: '3rem' }}>
//                                                     <FAIcon name={ child.faIcon } />
//                                                     <div>{ child.label }</div>
//                                                 </div>
//                                             </div>
//                                         ))
//                                     }
//                                 </div>
//                             </div>
//                         )
//                 }
//             </div>
//             <div>
//                 {
//                     bottomItems.map((item, i) => item.separator
//                         ? <div key={ `${Date.now()}${i}` } className='divider horizontal' />
//                         : <div key={ `${item.label}${i}` }
//                             id={ item.id || `navbar-item-${item.label}`}
//                             title={ item.label }
//                             className={`item ${isActiveTab(item.path) ? 'active' : ''}`}
//                             style={ item.style || {} }
//                             onClick={ item.onClick
//                                 ? item.onClick
//                                 : goTo(item.path)
//                             }>
//                             <div className='flex-row'>
//                                 <FAIcon name={ item.faIcon } />
//                                 {
//                                     isExpanded && <div>{ item.label }</div>
//                                 }
//                             </div>
//                         </div>
//                     )
//                 }
//             </div>
//         </div>
//         // #endregion
// }

// export default withRouter(Navbar)
