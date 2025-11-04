"use client";

import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import { DotButton, useDotButton } from '../components/emblacarouseldotbutton'
import {
    PrevButton,
    NextButton,
    usePrevNextButtons
} from '../components/emblacarouselarrows'
import useEmblaCarousel from 'embla-carousel-react'

import '../styles/embla.css'


type ProjectType = {
    image: string;
    title: string;
    description: string;
    resources: { label: string; link: string }[]; // New resources array for each project
};

type PropType = {
    projects: ProjectType[];
    options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
    const { projects, options } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel(options);

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi)

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    return (
        <section className="embla" >
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {projects.map((project, index) => (
                        <div className="embla__slide" key={index}>
                            <h3 className="embla__slide__title">{project.title}</h3>
                            <p className="embla__slide__description">{project.description}</p>
                            <img
                                src={project.image}
                                alt={project.title}
                                className="embla__slide__image"
                            />
                            <div>
                            <p className="embla__slide__resources_guide">
                                Please find the resources for this project below. To requess access to the datasets, please use the provided link to submit a form and we will get back to you as soon as possible.
                            </p>
                            <ul className="embla__slide__resources">
                                {project.resources.map((resource, resIndex) => (
                                    <li key={resIndex} className="embla__slide__resource">
                                        <a href={resource.link} target="_blank" rel="noopener noreferrer">
                                            {resource.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="embla__controls">
                <div className="embla__buttons">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                </div>

                <div className="embla__dots">
                    {scrollSnaps.map((_, index) => (
                        <DotButton
                            key={index}
                            onClick={() => onDotButtonClick(index)}
                            className={'embla__dot'.concat(
                                index === selectedIndex ? ' embla__dot--selected' : ''
                            )}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default EmblaCarousel
