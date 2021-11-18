import React from 'react';
import { Card } from '../card/card.component';
import './card-list.style.css';

export const CardList = props => (
    <div className="card-list">
        {props.monsters.map(monster => (
            <Card
                key={monster.id}
                id={monster.id}
                email={monster.email}
                monster={monster.name}
            >
            </Card>
        ))}
    </div>
);