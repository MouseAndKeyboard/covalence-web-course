import { Query } from './index';

const all = async () => Query('SELECT * FROM Users');
const one = async (id: number) => Query('SELECT * FROM Users WHERE id = ?', [id])

export default {
    all,
    one
}