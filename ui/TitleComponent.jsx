import DividerComponent from './DividerComponent';

export default function TitleComponent({ children, title }) {
  return (
    <>
      <div className='center-items flex-col w-full h-full p-0 m-0'>
        <div className='text-xl my-3 text-font color-secondary'>{title}</div>
        <DividerComponent />
        <div>{children}</div>
      </div>
    </>
  );
}
