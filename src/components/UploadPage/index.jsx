import React, { useEffect, useState, useContext } from 'react';
import SearchImage from "../../assets/images/Search.svg";
import { Row, Col, message, Upload } from 'antd';
import { CloudUploadOutlined } from '@ant-design/icons'
import { useHistory } from 'react-router-dom';
import { AppContext } from '../../context/AuthContext';
const { Dragger } = Upload;

const UploadPage = ()  =>{
    const history = useHistory();
    const {setSelectedTopic, topicList, setTopicList} = useContext(AppContext)

    const props = {
        name: 'file',
        accept: ".csv, .tsv, .gsheet, .xlsx, .xls",
        multiple: true,
        action: 'https://tablegpt-add7b806bc39.herokuapp.com/upload',
        onChange(info) {
          const { status } = info.file;
          if (status !== 'uploading') {
            console.log(info.file, info.fileList);
          }
          if (status === 'done') {
            console.log("upload done", info)
            setSelectedTopic(info.file.response)
            let updateList = [...topicList];
            updateList.push(info.file.response)
            setTopicList(updateList)
            history.push("/chat")
            // message.success(`${info.file.name} file uploaded successfully.`);
          } else if (status === 'error') {
            console.log("upload error", info)
            // message.error(`${info.file.name} file upload failed.`);
          }
        },
        onDrop(e) {
          console.log('Dropped files', e.dataTransfer.files);
        },
      };

    return (
        <div className='upload_page'>
            <section className="sp" id="tokenomics">
                <div className="container upload_div">
                    <div className='upload_header_div'>
                        <Row className='upload_row'>
                            <Col xs={24} sm={24} md={18} lg={18}>
                                <h1 className='upload_header_title'>Find Your Data Patterns Instantly</h1>
                                <p className='upload_header_subtitle'>Upload CSV, TSV, Excel or Google Sheets for seamless data integration</p>
                            </Col>
                            <Col xs={0} sm={0} md={6} lg={6}>
                                <img className="search_icon" src={SearchImage} />
                            </Col>
                        </Row>
                    </div>
                    <div className='upload_file_div'>
                        <Dragger {...props} className='upload_dragger'>
                            <p className="ant-upload-drag-icon">
                            <CloudUploadOutlined />
                            </p>
                            <p className="ant-upload-text">Select CSV, TSV, Excel and Google Sheets</p>
                            <p className="ant-upload-hint">
                            or drag and drop it here
                            </p>
                        </Dragger>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default UploadPage;