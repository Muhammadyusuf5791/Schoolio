import React from 'react'
import './Items.css'
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const Items = () => {
  return (
    <div className='items-container'>
      <h1>FAQ</h1>
      <div className="items">
        <div className="content1 content">
            <h4>Pricing, Discounts, and Refunds</h4>
            <FaAngleDown />
        </div>
        <div className="content2 content">
            <div className="item">
                <h4>Signing Up & Usage</h4>
                <FaAngleUp />
            </div>
            <div className="item">
                <p>Which educator account should I sign up for?</p>
                <FaAngleDown />
            </div>
            <div className="item item1">
                <p>How will I find out about new features?</p>
                <FaAngleUp />
            </div>
            <div className="item">
                <p>You will be notified via email or as a notification in the platform anytime there are new updates coming. We strive to have new releases <br />disrupt current users as little as possible, and will provide as much notice and detail in advance as we are able to.</p>
            </div>
            <div className="item item2">
                <p>Why do some lessons not have videos?</p>
                <FaAngleDown />
            </div>
            <div className="item">
                <p>Why do some lessons not have videos?</p>
                <FaAngleDown />
            </div>
        </div>
        <div className="content3 content">
            <h4>Grading & Scheduling</h4>
            <FaAngleDown />
        </div>
        <div className="content4 content">
            <h4>Grading & Scheduling</h4>
            <FaAngleDown />
        </div>
        <div className="content5 content">
            <h4>Data Usage</h4>
            <FaAngleDown />
        </div>
      </div>
    </div>
  )
}

export default Items
