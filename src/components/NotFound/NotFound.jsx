import React from 'react'
import './NotFound.scss'
import NotFoundImage from '../../img/404.png'
import Header from '../Header/Header'

export default function NotFound() {
    return (
        <>
            <Header />
            <section className="error">
                <img
                    className="error__image"
                    alt="изображение отсутствующей страницы"
                    src={NotFoundImage}
                />
                <p className="error__subtitle">
                    Извините, запрашиваемая страница не найдена. Возможно, она
                    перемещена, удалена или вы ввели неверный адрес.
                </p>
            </section>
        </>
    )
}
