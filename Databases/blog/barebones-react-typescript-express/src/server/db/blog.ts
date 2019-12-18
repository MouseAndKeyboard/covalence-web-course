import { Query } from './index';

const All = async () => Query("SELECT * FROM Blogs");

export default {
    All
}