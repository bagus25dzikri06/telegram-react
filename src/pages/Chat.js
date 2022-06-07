import React from 'react'
import { Col, Row, Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, Collapse, NavLink, Input} from 'reactstrap'
import style from '../assets/styles/style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faCheckDouble, faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons'

export default function Chat() {
  return (
    <div style={{
      overflowX: 'hidden'
    }}>
      <Row>
        <Col md={4}>
          <Navbar color="faded" light>
            <NavbarBrand className="me-auto" href="/" style={{
              color: '#7E98DF',
              fontSize: '29px'
            }}><b>Telegram</b></NavbarBrand>
            <NavbarToggler className="me-2" onClick={function noRefCheck(){}} />
            <Collapse navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink href="/components/">
                    Components
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">
                    GitHub
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
          <Row>
            <Col md={1}>
              <FontAwesomeIcon
                icon={faMagnifyingGlass} style={{ fontSize: 30 }}
              />
            </Col>
            <Col md={8}>
              <Input class="form-control" type="text" placeholder="Type your message..." /> 
            </Col>
            <Col>
              <FontAwesomeIcon
                icon={faPlus} style={{ fontSize: 30, color: 'blue' }}
              />
            </Col>
          </Row>
          <Row className='py-3'>
            <Nav style={{
              display: 'flex',
              justifyContent: 'space-between'
            }}>
              <NavItem>
                <NavLink href='#'><b>All</b></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='#'><b>Important</b></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='#'><b>Unread</b></NavLink>
              </NavItem>
            </Nav>
          </Row>
          <Row className='py-3'>
            <Col md={2}>
              <img src='../images/Rectangle3.jpg' alt='...' />
            </Col>
            <Col>
              <Row>
                <Col md={6} className='text-start'>
                  <h5>
                    Theresa Webb
                    &nbsp;
                    <FontAwesomeIcon
                      icon={faBell}
                      style={{ fontSize: 20, color: "blue" }}
                    />
                  </h5>
                </Col>
                <Col md={6}>
                  <p className='text-muted'>15:20</p>
                </Col>
              </Row>
              <Row>
                <Col md={8} className='text-start'>
                  <p style={style.skyBlue}>Why did you do that?</p>
                </Col>
                <Col>
                  <p style={style.unreadMessageTotal}>2</p>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col md={2}>
              <img src='../images/Rectangle8.jpg' alt='...' />
            </Col>
            <Col>
              <Row>
                <Col md={6} className='text-start'>
                  <h5>
                    Calvin Flores
                  </h5>
                </Col>
                <Col md={6}>
                  <p className='text-muted'>15:13</p>
                </Col>
              </Row>
              <Row>
                <Col md={8} className='text-start'>
                  <p style={style.skyBlue}>Hi, bro! Come to my house!</p>
                </Col>
                <Col>
                  <p style={style.unreadMessageTotal}>1</p>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col md={2}>
              <img src='../images/Rectangle81.jpg' alt='...' />
            </Col>
            <Col>
              <Row>
                <Col md={6} className='text-start'>
                  <h5>
                    Gregory Bell
                  </h5>
                </Col>
                <Col md={6}>
                  <p className='text-muted'>15:13</p>
                </Col>
              </Row>
              <Row>
                <Col md={8} className='text-start'>
                  <p style={style.skyBlue}>Will you stop ignoring me?</p>
                </Col>
                <Col>
                  <p style={style.unreadMessageTotal}>164</p>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col md={2}>
              <img src='../images/Rectangle82.jpg' alt='...' />
            </Col>
            <Col>
              <Row>
                <Col md={6} className='text-start'>
                  <h5>
                    Soham Henry
                    &nbsp;
                    <FontAwesomeIcon
                      icon={faBell}
                      style={{ fontSize: 20, color: "blue" }}
                    />
                  </h5>
                </Col>
                <Col md={6}>
                  <p className='text-muted'>8:30</p>
                </Col>
              </Row>
              <Row>
                <Col md={8} className='text-start'>
                  <p style={{
                    color: '#848484'
                  }}>Me: Bro, just f**k off</p>
                </Col>
                <Col>
                <FontAwesomeIcon
                    icon={faCheckDouble}
                    style={{ fontSize: 20, color: "blue" }}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col md={2}>
              <img src='../images/Rectangle83.jpg' alt='...' />
            </Col>
            <Col>
              <Row>
                <Col md={6} className='text-start'>
                  <h5>
                    Mother
                  </h5>
                </Col>
                <Col md={6}>
                  <p className='text-muted'>7:20</p>
                </Col>
              </Row>
              <Row>
                <Col md={8} className='text-start'>
                  <p style={{
                    color: '#848484'
                  }}>Me: Yes, of course come, ...</p>
                </Col>
                <Col>
                  <FontAwesomeIcon
                    icon={faCheckDouble}
                    style={{ fontSize: 20, color: "#C4C4C4" }}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          backgroundColor: '#E5E5E5'
        }}>
          Please select a chat to start messaging
        </Col>
      </Row>
    </div>
  )
}
