import data from '../data/bankCodes';
import { useState } from 'react';
import { Autocomplete, Stack, TextField } from '@mui/material';
const BankCodeLookup = () => {
  const [id, setId] = useState('');

  const bankInfo = id && data[id] ? data[id] : null;

  return (
    <main className='two'>
      <form onSubmit={(e) => e.preventDefault()}>
        <Stack sx={{ width: '100%' }}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={Object.keys(data)}
            sx={{ width: 250, backgroundColor: "#fff", borderRadius: 1, '& input': { textAlign: 'center' }, boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}
            inputValue={id}
            onInputChange={(e, v) => {
              setId(v ? v.toString() : '');
            }}
            onDoubleClick={() => setId('')}
            renderInput={(params) => <TextField {...params} label="الكود الوارد باستعلام iScore" sx={{ textAlign: 'center' }} />}
          />
        </Stack>
      </form>
      <div className='data'>
        {bankInfo && bankInfo.bankNameAr && <p className='bankNameAr'>{bankInfo.bankNameAr}</p>}
        {bankInfo && bankInfo.bankNameEn && <p className='bankNameEn'>{bankInfo.bankNameEn}</p>}
      </div>
    </main>
  );
}
export default BankCodeLookup;
