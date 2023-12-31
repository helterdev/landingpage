import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '../ui/button';

export default function Principal() {
  return (
    <section>
    <div className='min-h-screen w-4/5 m-auto flex justify-center flex-col gap-y-4'>
      <h1 className='text-6xl font-bold text-black'>Order food<br/>to your door</h1>
      <div>
        <div className='flex flex-col gap-y-1 md:flex-row gap-x-4'>
          <Label className='sm:w-3/5'>
            <Input placeholder='Enter devivery address' className='h-14 bg-white py-2 rounded-none outline-0 focus:outline-0'/>
          </Label>
          <Label>
            <Select>
                <SelectTrigger className='w-[180px] h-14 bg-white rounded-none'>
                    <SelectValue placeholder='Deliver Now'/>
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value='Deliver_Now' className='hover:cursor-pointer'>Deliver Now</SelectItem>
                    <SelectItem value='Schedule_for_later' className='hover:cursor-pointer'>Schedule for later</SelectItem>
                </SelectContent>
            </Select>
          </Label>
          <div>
            <Button className='h-14 w-40 bg-black hover:bg-slate-800'>Find Food</Button>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}
