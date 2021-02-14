import React, { Component, useRef, useState } from "react";
import { Form } from "react-bootstrap";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  EmailShareButton,
  FacebookShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton,
} from "react-share";
import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  HatenaIcon,
  InstapaperIcon,
  LineIcon,
  LinkedinIcon,
  LivejournalIcon,
  MailruIcon,
  OKIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  ViberIcon,
  VKIcon,
  WeiboIcon,
  WhatsappIcon,
  WorkplaceIcon,
} from "react-share";
import "./style.css";
const SocialMediaShare = () => {
  const [copySuccess, setCopySuccess] = useState("");
  const textAreaRef = useRef(null);
  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand("copy");
    // This is just personal preference.
    // I prefer to not show the the whole text area selected.
    e.target.focus();
    setCopySuccess("Copied!");
  }

  const url =
    "https://booktennislessons.com/app/Frontend/registerProgram/209?fbclid=IwAR1VQ6t93HvxH_LfIQVtjn_3Ngqfo-AoHbf0EbQFEXAohDUBDN-ngMvtr10";
  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <div className="my-4 w-75 d-flex flex-row  align-items-center justify-content-center">
        <Form.Control
          type="text"
          defaultValue={url}
          className=""
          ref={textAreaRef}
        />
        <div className="copy-container">
        <span className="copied mx-3 d-block">{copySuccess}</span>
        <i className="far fa-copy copy-link mx-3  d-block" onClick={copyToClipboard}></i>
        </div>
      </div>
      <section className="social-media-share mb-5">
        <FacebookShareButton url={`${url}`} className="facebook">
          <FacebookIcon size={"2.5rem"} round />
        </FacebookShareButton>

        <TwitterShareButton url={`${url}`} className="twitter">
          <TwitterIcon size={"2.5rem"} round />
        </TwitterShareButton>

        <EmailShareButton url={`${url}`} className="email">
          <EmailIcon size={"2.5rem"} round />
        </EmailShareButton>

        <WhatsappShareButton url={`${url}`} className="whatsapp">
          <WhatsappIcon size={"2.5rem"} round />
        </WhatsappShareButton>
      </section>
    </div>
  );
};

export default SocialMediaShare;
