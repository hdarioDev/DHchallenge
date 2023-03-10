import React from 'react';
import {render} from '@testing-library/react-native';
import ImageDetail from './Image';

describe('<ImageDetail />', () => {
  const mockImgUrl = 'https://example.com/image.jpg';

  it('should render the image with the provided URL', () => {
    const {getByTestId} = render(<ImageDetail img={mockImgUrl} />);
    const imageComponent = getByTestId('image-component');

    expect(imageComponent.props.source.uri).toBe(mockImgUrl);
  });
});
