import { Dialog, DialogContent, DialogTitle, DialogTrigger} from '@/components/ui/dialog'
import { ReactNode } from 'react'

interface props{
    children:ReactNode
}
function AddTask({children}:props) {
  return (
    <Dialog>
        <DialogTrigger>{children}</DialogTrigger>
        <DialogContent>
            <DialogTitle>Add new Task</DialogTitle>
            <form>
                <div>
                    <label htmlFor='name' className='block'>Task name</label>
                    <input id='name' name='name' maxLength={20} placeholder='Name'  className='h-8 outline-none'/>
                </div>
                <div>
                    <label htmlFor='description' className='block'>Description</label>
                    <textarea id='description' name='description' maxLength={200} placeholder='Description' className='w-full h-32 resize-none'/>    
                </div>
                <button className='bg-app'>Submit</button>
            </form>
        </DialogContent>
    </Dialog>
  )
}

export default AddTask