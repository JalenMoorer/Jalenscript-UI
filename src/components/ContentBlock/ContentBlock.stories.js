import React from 'react';
import ContentBlock from './ContentBlock';
import { contentBlockData } from './data';

export default { 
    title: 'ContentBlock',
    component: ContentBlock,
};

export const Component = () => <ContentBlock id="test" data={contentBlockData} />;

Component.story = {
    name: 'ContentBlock with Copy',
};