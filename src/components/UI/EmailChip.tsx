export const EmailChip = ({ email, onDelete }: any) => {
  return (
    <div className='border rounded-full w-fit px-2 flex items-center gap-2'>
      <span>{email}</span>
      <button className='text-red-400' onClick={() => onDelete(email)}>
        x
      </button>
    </div>
  );
};
