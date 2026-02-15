const listCache = new Map();
const detailCache = new Map();

export const animeCache = {
  getList(offset) {
    return listCache.get(offset);
  },

  setList(offset, data) {
    listCache.set(offset, data);
  },

  getDetail(id) {
    return detailCache.get(id);
  },

  setDetail(id, data) {
    detailCache.set(id, data);
  }
};
