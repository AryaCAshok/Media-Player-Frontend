import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Videocard from './Videocard';
import { getAllVideos } from '../services/allAPI';


function View({uploadVideoStausToView}) {
  const [allVideo, setAllVideo] = useState([])
  const [deleteVideoStatus,setdeleteVideoStatus]=useState(false)
  const getAllUploadedVideos = async () => {
    const response = await getAllVideos();
    const { data } = response;
    setAllVideo(data)
    // console.log("==All videos==");
    // console.log(response);
  }
  useEffect(() => {
    getAllUploadedVideos();
    setdeleteVideoStatus(false)
  }, [uploadVideoStausToView,deleteVideoStatus])
  console.log("==All videos==");
  console.log(allVideo);
  return (
    <>
      <Row>
        {
          allVideo.length > 0 ?
            allVideo.map((video) => (
              <Col sm={12} md={6} lg={4} xl={4} className='m-5'>
                <Videocard displayVideo={video}
                setdeleteVideoStatus={setdeleteVideoStatus}
                />
              </Col>
            ))
            :
            <p>No item To Display</p>

        }

      </Row>
    </>
  )
}

export default View