import React, {useState, useEffect} from 'react'
import {Row, Image, Col, Button, Alert} from 'react-bootstrap'
import { deleteReview, fetchReviews } from '../http/reviewAPI'
import { getAllUsers } from '../http/userAPI'
import image from "../images/fbpic_0.jpg";

export const ReviewItem = ({item, user, devId, setInfo}) => {
    const [trigger, setTrigger] = useState(false)
    const [userInfo, setUserInfo] = useState([{name: '', surname: '', email: ''}])
    useEffect(() => {
        getAllUsers('USER').then(data => setUserInfo(data))
    }, [])
    const deleteReviewItem = (id) => {
        deleteReview(id)
        setTrigger(true)
    }
    return (
       <Row style={{borderBottom: "1px solid #E0E0E0"}} className="ml-5 mr-5 mt-3 pb-2">
           <Col md={0.3}>
           <Image style={{borderRadius: "50%"}} width={70} height={70} src={image}></Image>
           </Col>
           <Col md={5}>
            {userInfo.map((userInf, index) => userInf.id === item.userId && <h6 key={index}>{userInf.name}</h6>)}
            <p style={{fontWeight: "300"}}>{item.text}</p>
           </Col>
           {user.user.role === 'ADMIN' && <Col className="d-flex align-items-center"><Button onClick={() => deleteReviewItem(item.id)}>Удалить</Button></Col>}
           {trigger && (
       <Alert dismissible onClose={() => setTrigger(false)}  variant="success">
       Отзыв удалён! Обновите страницу
       </Alert>
      )}
       </Row>
    )
}

export default ReviewItem
