import React, { useEffect, useState } from 'react';
import onepng from "../../assets/images/companylogo/1.png"
import twopng from "../../assets/images/companylogo/2.png"
import threepng from "../../assets/images/companylogo/3.png"
import fourpng from "../../assets/images/companylogo/4.png"
import fivepng from "../../assets/images/companylogo/5.png"
import sixpng from "../../assets/images/companylogo/6.png"
import sevenpng from "../../assets/images/companylogo/7.png"
import backgroundimage from "../../assets/images/background_image.png"
import oneicon from "../../assets/images/icon/1.png"
import twoicon from "../../assets/images/icon/2.png"
import threeicon from "../../assets/images/icon/3.png"
import fouricon from "../../assets/images/icon/4.png"
import fiveicon from "../../assets/images/icon/5.png"
import frame5 from "../../assets/images/Frame 5.png"
import retangle14 from "../../assets/images/Rectangle 14.png"
import iconText from "../../assets/images/Group 19.png"
import teamimage from "../../assets/images/Alden.png"
import vladimage from "../../assets/images/Andrea.jpeg"
import logoTitle from "../../assets/images/logoTitle.png"

import { Button, Row, Col, Segmented, Collapse, Input } from 'antd';
import { CheckCircleFilled, PlusOutlined, MinusOutlined } from '@ant-design/icons'
import Slider from "react-slick";
import { useHistory } from 'react-router-dom';
const { Panel } = Collapse;

const Main = (props)  =>{
    const history = useHistory();
    const settings = {
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        centerPadding: '40px',
        autoplaySpeed: 1000,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
            slidesToShow: 2
            }
            }, {
            breakpoint: 520,
            settings: {
            slidesToShow: 1
            }
            }]
    }

    return (
        <div>
            <main>
                <div className="hero">
                    <img alt={""} src={backgroundimage} className='hero-image'/>
                    <div className='imageGroup'>
                        <Row>
                            <Col span={12}>
                                <Row>
                                    <Col span={24}>
                                        <p className='imageTitleOne'>the best AI whiter for facebook ads</p>
                                        <p className='imageTitleTwo'>Copywriting <br/> made simple</p>
                                        <p className='imageTitleThree'>Make SEO-optimzied and plagiarism-free content for your ads, <br /> blog, emails, product descriptions and more 10X faster</p>
                                        <Row justify="start" gutter={20}>
                                            <Col span={10}>
                                                <Button className="startfree_btn" shape='round' >Get started for free</Button>
                                            </Col>
                                            <Col span={8}>
                                                <Button className="watchvideo_btn" shape='round' >Watch video</Button>
                                            </Col>
                                        </Row>
                                    </Col>
                                    
                                </Row>
                            </Col>
                        </Row>

                    </div>
                    {/* <img alt={""} className="overlay" src={largeimage} /> */}
                </div>
            </main>
            <section id="heros">
                <div className="container">
                    <div className="logos-slider">
                        <Slider {...settings}>
                            <div className="slide">
                                <img alt={""} className='companylogo' src={onepng} />
                            </div>
                            <div className="slide">
                                <img alt={""} className='companylogo' src={twopng} />
                            </div>
                            <div className="slide">
                                <img alt={""} className='companylogo' src={threepng} />
                            </div>
                            <div className="slide">
                                <img alt={""} className='companylogo' src={fourpng} />
                            </div>
                            <div className="slide">
                                <img alt={""} className='companylogo' src={fivepng} />
                            </div>
                            <div className="slide">
                                <img alt={""} className='companylogo' src={sevenpng} />
                            </div>
                            <div className="slide">
                                <img alt={""} className='companylogo' src={sixpng} />
                            </div>
                        </Slider>
                    </div>
                </div>
                     
            </section>
            <section id="exchange">
                <div className="container">
                    <h1 className='container_saytitle'> Say 'goodbye' to writer's block</h1>
                    <p className='container_saysubtitle'> An Al Contet Conerator that helps you and your team break through <br/> An Al Contet Conerator that helps you and your team break through</p>
                    <div className='blog-containter'>
                        <Row gutter={20} className='blog-rows'>
                            <Col xs={24} sm={12} md={12} lg={8} className='blog-col'>
                                <img className='icon-img' src={oneicon} ></img>
                                <p className='blog-title'>30+ Tools</p>
                                <p className='blog-text'>Choose from over 30 different wrting skills trained on industry best-practices and proven examples</p>
                            </Col>
                            <Col xs={24} sm={12} md={12} lg={8} className='blog-col'>
                                <img className='icon-img' src={twoicon} ></img>
                                <p className='blog-title'>Blogs</p>
                                <p className='blog-text'>Choose from over 30 different wrting skills trained on industry best-practices and proven examples</p>
                            </Col>
                            <Col xs={24} sm={12} md={12} lg={8} className='blog-col'>
                                <img className='icon-img' src={threeicon} ></img>
                                <p className='blog-title'>Social Media</p>
                                <p className='blog-text'>Choose from over 30 different wrting skills trained on industry best-practices and proven examples</p>
                            </Col>
                            <Col xs={24} sm={12} md={12} lg={12} className='blog-col'>
                                <img className='icon-img' src={fouricon} ></img>
                                <p className='blog-title'>Product Descriptions</p>
                                <p className='blog-text'>Choose from over 30 different wrting skills trained on industry best-practices and proven examples</p>
                            </Col>
                            <Col xs={24} sm={12} md={12} lg={12} className='blog-col'>
                                <img className='icon-img' src={fiveicon} ></img>
                                <p className='blog-title'>Blogs</p>
                                <p className='blog-text'>Choose from over 30 different wrting skills trained on industry best-practices and proven examples</p>
                            </Col>
                        </Row>
                    </div>
                </div>
            </section>
            <section >
                <div className="container">
                    <Row gutter={30}>
                        <Col xs={24} sm={12} md={12} lg={10} className='analyze-col'>
                            <p className='imageTitleOne'>Revolutionzing data analysis</p>
                            <p className='imageTitleTwo'>Instawrite is for<br/> Everyone.</p>
                            <p className='imageTitleThree'>Make SEO-optimzied and plagiarism-free content for your ads, <br /> blog, emails, product descriptions and more 10X faster</p>
                            <input className='checkbox-item' type='checkbox' defaultChecked={true} disabled /> High Analysis
                            <br/ >
                            <input className='checkbox-item' type='checkbox' defaultChecked={true} disabled /> Certified institute
                            <Row className="flame-rows" justify="start" gutter={10}>
                                <Col span={14}>
                                    <img className='frame5' src={frame5} />
                                </Col>
                                <Col span={4}>
                                    <Button className="learnmore_btn" shape='round' >↗ <br/> Learn More</Button>
                                </Col>
                            </Row>
                            </Col>
                        <Col xs={12} sm={12} md={12} lg={8} className='analyze-col'>
                            <img className='retangle14' src={retangle14} />
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={6}>
                            <div className='analyze-col-blog'>
                                <p className='topdoubledot'>“</p>
                                <p className="topdot_title">Our platform excels, utillzing advanced tech to optimize data processing and analysis, offering superior data solutions, and partnering with you to expand your enterprise, no matter its size</p>
                                <img className='iconText' src={iconText} />
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
            <section className="sp" id="tokenomics">
                <div className="container">
                    <Row gutter={40} >
                        <Col xs={12} sm={12} md={12} lg={5} className='analyze-col'>
                            <Row>
                                <Col className='numbertitle_col' span={14}>
                                    <div className='numbertitle_div'>
                                        <p className='number_title'>Formats</p>
                                    </div>
                                </Col>
                                <Col span={10}><h1 className='number_info'>4</h1></Col>
                            </Row>
                            <Row>
                                <p className='numbertitle_rows'><span className='down_line'>|</span>&nbsp;&nbsp; Supports Multiple Types</p>
                            </Row>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={7} className='analyze-col'>
                            <Row>
                                <Col className='numbertitle_col' span={10}>
                                    <div className='numbertitle_div_project'>
                                        <p className='number_title_project'>Projects</p>
                                    </div>
                                </Col>
                                <Col span={14}><h1 className='number_info'>10000</h1></Col>
                            </Row>
                            <Row>
                                <p className='numbertitle_rows'><span className='down_line'>|</span>&nbsp;&nbsp; Trusted Globally for global business</p>
                            </Row>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={5} className='analyze-col'>
                            <Row>
                                <Col className='numbertitle_col' span={14}>
                                    <div className='numbertitle_div_analysis'>
                                        <p className='number_title_analysis'>Analysis</p>
                                    </div>
                                </Col>
                                <Col span={10}><h1 className='number_info'>1s</h1></Col>
                            </Row>
                            <Row>
                                <p className='numbertitle_rows'><span className='down_line'>|</span>&nbsp;&nbsp; Instant Analysis</p>
                            </Row>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={7} className='analyze-col'>
                            <Row>
                                <Col className='numbertitle_col' span={11}>
                                    <div className='numbertitle_div_uptime'>
                                        <p className='number_title_uptime'>Uptime</p>
                                    </div>
                                </Col>
                                <Col span={13}><h1 className='number_info'>99.9%</h1></Col>
                            </Row>
                            <Row>
                                <p className='numbertitle_rows'><span className='down_line'>|</span>&nbsp;&nbsp; Reliable Performance</p>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </section>
            <section>
                <div className="container">
                    <p className='teamdiv_title'>Trusted By the best teams</p>
                    <div className="row2">
                        <div className="card">
                            <div className="img"><img alt={""} src={teamimage} /></div>

                            <center>
                            <h3>Alden - <span>Founder</span></h3>
                            <p>
                                A long-term crypto enthusiast with a professional IT
                                Infrastructure and Project Management background I build
                                communities and technology in Web3.
                            </p>
                            </center>
                        </div>
                        <div className="card">
                            <div className="img"><img alt={""} src={vladimage} /></div>

                            <center>
                            <h3>Andrea – <span>AI Developer</span></h3>
                            <p>
                                Artist extraordinaire I create 2D and 3D designs in Blender and
                                Photoshop. Currently in final year of Financial Studies at
                                University.
                            </p>
                            </center>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className='unlock_div'>
                        <p className='unlock_title'>Unlock the power of AI</p>
                        <p className='unlock_subtitle'>Meet the TableAI of our ai chat app revolutionzing conversation</p>
                        <div className="licensetype_radio" >
                            <Segmented options={['Monthly', 'Anualy(-20%)']} size='larger'/>
                        </div>
                    </div>

                    <div className="row2">
                        <div className="card-body card-standard">
                            <Row justify="space-between">
                                <Col span={8}><h1 className='license_title'>Standard</h1></Col>
                                <Col className="license_mark_div" span={4}>
                                    <div className='license_mark'>
                                        <p className='license_mark_title'>Popular</p>
                                    </div>
                                </Col>
                            </Row>
                            <p className='license_subtitle'>Advanced chat features</p>
                            <p className='license_price'>$ <span className='license_price_number'>29</span> / mo</p>
                            <p className='license_price_title'>Per month, per team members</p>
                            <div className='checkbox_group'>
                                <CheckCircleFilled className="checkbox_list" twoToneColor="#7C878E"/>&nbsp;&nbsp;&nbsp;10 chatbots <br />
                                <CheckCircleFilled className="checkbox_list" twoToneColor="#7C878E"/>&nbsp;&nbsp;&nbsp;Up to 5000 messages/mo <br />
                                <CheckCircleFilled className="checkbox_list" twoToneColor="#7C878E"/>&nbsp;&nbsp;&nbsp;Basic analysis <br />
                                <CheckCircleFilled className="checkbox_list" twoToneColor="#7C878E"/>&nbsp;&nbsp;&nbsp;Custom chatbot <br />
                                <CheckCircleFilled className="checkbox_list" twoToneColor="#7C878E"/>&nbsp;&nbsp;&nbsp;Email support <br />
                                <CheckCircleFilled className="checkbox_list" twoToneColor="#7C878E"/>&nbsp;&nbsp;&nbsp;Google sheet support <br />

                                <Button className='price_start_btn' shape='round'>Get Started</Button>
                            </div>
                        </div>
                        <div className="card-body card-pro">
                            <Row justify="space-between">
                                <Col span={8}><h1 className='license_title pro'>Pro</h1></Col>
                            </Row>
                            <p className='license_subtitle'>Advanced chat features</p>
                            <p className='license_price'>$ <span className='license_price_number'>49</span> / mo</p>
                            <p className='license_price_title'>Per month, per team members</p>
                            <div className='checkbox_group'>
                                <CheckCircleFilled className="checkbox_list" twoToneColor="#7C878E"/>&nbsp;&nbsp;&nbsp;10 chatbots <br />
                                <CheckCircleFilled className="checkbox_list" twoToneColor="#7C878E"/>&nbsp;&nbsp;&nbsp;Up to 5000 messages/mo <br />
                                <CheckCircleFilled className="checkbox_list" twoToneColor="#7C878E"/>&nbsp;&nbsp;&nbsp;Basic analysis <br />
                                <CheckCircleFilled className="checkbox_list" twoToneColor="#7C878E"/>&nbsp;&nbsp;&nbsp;Custom chatbot <br />
                                <CheckCircleFilled className="checkbox_list" twoToneColor="#7C878E"/>&nbsp;&nbsp;&nbsp;Email support <br />
                                <CheckCircleFilled className="checkbox_list" twoToneColor="#7C878E"/>&nbsp;&nbsp;&nbsp;Google sheet support <br />

                                <Button className='price_start_btn' shape='round'>Get Started</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className='faq_div'>

                        <h1 className="container_saytitle">Frequently asked questions</h1>
                        <Collapse bordered={false} defaultActiveKey={['1']} expandIcon={({ isActive }) => isActive ? <MinusOutlined />: <PlusOutlined />} >
                            <Panel header="what is table AI?" key="1">
                                <p className='faq_answer_title'>
                                    TableAI is a messageing platform that uses artificial intelligence to communication with users. It can understand natural language and provide helpful responses to your questions and requests.
                                </p>
                            </Panel>
                            <Panel header="what is table AI?" key="2">
                                <p className='faq_answer_title'>
                                    TableAI is a messageing platform that uses artificial intelligence to communication with users. It can understand natural language and provide helpful responses to your questions and requests.
                                </p>
                            </Panel>
                            <Panel header="what is table AI?" key="3">
                                <p className='faq_answer_title'>
                                    TableAI is a messageing platform that uses artificial intelligence to communication with users. It can understand natural language and provide helpful responses to your questions and requests.
                                </p>
                            </Panel>
                            <Panel header="what is table AI?" key="4">
                                <p className='faq_answer_title'>
                                    TableAI is a messageing platform that uses artificial intelligence to communication with users. It can understand natural language and provide helpful responses to your questions and requests.
                                </p>
                            </Panel>
                        </Collapse>
                    </div>
                </div>
            </section>
            <div className='contact_us'>
                <div className='title_div'>
                    <p className='contactus_title'>Copywriting made simple</p>
                    <p className='contactus_subtitle'>Subscribe to learn about new guides, the latest AI news, and updates.</p>
                    <Row justify="center" gutter={30}>
                        <Col xs={24} sm={24} md={16} lg={14}>
                            <Input className='contact_email' placeholder='Enter your Email'></Input>
                        </Col>
                        <Col xs={24} sm={24} md={8} lg={6}>
                            <Button className='contact_submit' shape='round'>Subscribe</Button>
                        </Col>
                    </Row>
                </div>
            </div>
            <footer>
                <div className="container">
                <div className="links">
                <img className="logoTitle" src={logoTitle}></img>

                    <a href="/#top" >Home</a>
                    <a href="/hero" >Features</a>
                    <a href="/bank" >Testimonials</a>
                    <Button className="defult-btn" ghost shape='round'>Sign In</Button>
                    <Button className="defult-btn-next"  shape='round'>Get Started Today</Button>
                </div>
                </div>
            </footer>
        </div>
    );
}

export default Main;