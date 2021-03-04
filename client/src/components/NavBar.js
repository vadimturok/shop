import React, {useContext, useState, useEffect} from 'react'
import { Context } from '../index'
import {Navbar, Nav, Container, Accordion, Card, Form, FormControl, Row, Col} from 'react-bootstrap'
import { ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE, SHOP_ROUTE } from '../utils/consts'
import {NavLink} from 'react-router-dom'
import {Button, Image} from 'react-bootstrap'
import {observer} from 'mobx-react-lite'
import {useHistory} from 'react-router-dom'
import TypeBar from './TypeBar'
import { fetchDevices } from '../http/deviceAPI'
import image from "../images/fbpic_0.jpg";
import SubmitQuite from './modals/SubmitQuite'

export const NavBar = observer(({}) => {
    const {user, device} = useContext(Context)
    const [searchDevice, setSearchDevice] = useState('')
    const [changed, setChanged] = useState(false)
    const [successVisible, setSuccessVisible] = useState(false)
    let [item, setItem] = useState([{}])
    const history = useHistory()
    const role = user.user.role

    useEffect(() => {
        fetchDevices(null, null, 1, 20).then(data => {
            setItem(data.rows)
        })
    }, [])



    const reset = () => {
        history.push(BASKET_ROUTE)
        device.setIsBought(false)
    }
    const handleChange = (e) => {
        e.preventDefault()
        setSearchDevice(e.target.value)
    }
    if(searchDevice.length > 0){
        item = item.filter(i => {
            return i.name.toLowerCase().match(searchDevice)
        })
    }


     

    return (
        <div onClick={() => setSearchDevice('')} style={{marginBottom: "60px"}}>
        <Navbar style={{fontFamily: "Roboto"}} className="pl-5 pr-5 fixed-top" bg="dark" variant="dark">
        
                <NavLink  style={{color: 'white', fontWeight: "900", fontSize: "20px", marginRight: "300px"}} to={SHOP_ROUTE}>ELECTRONICS</NavLink>
                <Form  inline>
                <FormControl value={searchDevice} onChange={e => handleChange(e)}  style={{width: "480px"}} type="text" placeholder="Искать товар...                                                                                 🔎" className="mr-sm-2" />
                </Form>

        {

            user.isAuth ? <Nav className="ml-auto" style={{color: 'white'}}>
                {role === 'ADMIN' && <Button onClick ={() => history.push(ADMIN_ROUTE)}>Администратор</Button>}
          <Nav.Link onClick={() => setSuccessVisible(true)}>Выйти</Nav.Link>
          <Nav.Link onClick={() => reset()}>Корзина</Nav.Link>
          {device.isBought && <span style={{width: "10px", height: "10px", backgroundColor: "red", borderRadius: "50%"}}></span>}
          <Nav.Link  onClick={() => history.push(PROFILE_ROUTE)}>Профиль</Nav.Link>
            <Image style={{borderRadius: "50%"}}  src={image} width={40} height={40}></Image>
        </Nav>
        :
        <Nav className="ml-auto" style={{color: 'white'}}> 
            <Nav.Link onClick={() => history.push(LOGIN_ROUTE)}>Авторизация</Nav.Link>
        </Nav>
        }
            
        
        
      </Navbar>
      <div style={{position: "fixed", zIndex: "10", marginTop: "-5px", boxShadow: "0 14px 28px rgba(0,0,0,0.25)", maxWidth: "480px", marginLeft: "477px", marginRight: "560px"}}>
          {searchDevice !== '' && (item.length === 0 ? <Nav.Link style={{color: "black", cursor: "default", marginLeft: "0px", marginRight: "560px", padding: "5px", border: "1px solid #E0E0E0", backgroundColor: "white", width: "480px"}}>Не нашлось подходящих товаров</Nav.Link> : 
          item.map((i, index) => <Nav.Link href={DEVICE_ROUTE + '/' + i.id} style={{marginLeft: "0px", marginRight: "560px", padding: "5px", border: "1px solid #E0E0E0", backgroundColor: "white", width: "480px"}} key={index}>{i.name}</Nav.Link>))}</div>
      <SubmitQuite show={successVisible}  onHide={() => setSuccessVisible(false)}></SubmitQuite>
      </div>
    )
})
export default NavBar
