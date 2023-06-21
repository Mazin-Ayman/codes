import data from './../../data';
import { useState } from 'react';
import { Autocomplete, Stack, TextField } from '@mui/material';
const Two = () => {
  const [id, setId] = useState('');
  const [bankAr, setBankAr] = useState(null);
  const [bankEn, setBankEn] = useState(null);
  const handler = () => {
    // if (!id || id === "") {
    //   setBankAr("")
    //   setBankEn("")
    //   return;
    // };
    setBankAr(data[id].bankNameAr)
    setBankEn(data[id].bankNameEn)
  }
  return (
    <main className='two'>
      <form onSubmit={(e) => e.target.preventDefault()}>
        <Stack sx={{ width: '100%' }}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={Object.keys(data)}
            sx={{ width: 250, backgroundColor: "#fff", borderRadius: 1, '& input': { textAlign: 'center' }, boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}
            inputValue={id}
            onInputChange={(e, v) => {
              setId(v.toString())
            }}
            onBlur={handler}
            onDoubleClick={() => setId('')}
            onKeyDown={(e) => {
              if (e.key === 'Enter') e.preventDefault();
            }}
            onSelect={handler}
            renderInput={(params) => <TextField {...params} label="الكود الوارد باستعلام iScore" sx={{ textAlign: 'center' }} />}
            // freeSolo
          />
        </Stack>
      </form>
      <div className='data'>
        {bankAr && <p className='bankNameAr'>{bankAr}</p>}
        {bankEn && <p className='bankNameEn'>{bankEn}</p>}
      </div>
    </main>
  );
}
export default Two;
