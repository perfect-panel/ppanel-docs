import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

interface SwaggerProps {
  url: string;
}
export default function Swagger(props: Readonly<SwaggerProps>) {
  return (
    <div className='relative'>
      <SwaggerUI url={props.url} />
    </div>
  );
}
