import React from 'react';
import { HiOutlineArrowSmRight } from "react-icons/hi";

const ProjectItems = ({item}) => {
  return (
        <div className="project__card" key={item.id}>
            <img className="project__img" src={item.image} alt="" />
            <h3 className="project__title">{item.title}</h3>
            <a href={item.demoLink} className="project__button_demo" target='_blank' rel='noreferrer'>
                Demo <HiOutlineArrowSmRight className="project__button-icon"/>
            </a>
            <a href={item.github} className="project__button_git" target='_blank' rel='noreferrer'>
                GitHub <HiOutlineArrowSmRight className="project__button-icon"/>
            </a>
        </div>
    );
}

export default ProjectItems;