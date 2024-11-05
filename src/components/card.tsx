import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

interface CardProps {
    id?: string;
    name: string;
    title: string;
    description: string;
    imageUrl: string;
    width?: number;
    imglarge: string;
}

const CustomCard: React.FC<CardProps> = ({ title, description, imageUrl, width = 240 }) => (
    <Card
        hoverable
        style={{ width }}
        cover={<img alt="example" src={imageUrl} />}
    >
        <Meta title={title} description={description} />
    </Card>
);

export default CustomCard;
