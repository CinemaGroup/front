import { instance } from '@/api/api.interceptors'
import { getFilesUrl } from '@/config/api.config'
import { TypeFile, TypeFileFilters } from '@/shared/types/file.type'

export const FileService = {
	async getAll(queryDto = {} as TypeFileFilters) {
		return instance.get<TypeFile[]>(getFilesUrl(''), {
			params: queryDto,
		})
	},

	async getDirectories() {
		return instance.get<string[]>(getFilesUrl('/directories'))
	},

	async upload(file: FormData, folder?: string) {
		return instance.post<{ url: string; name: string }[]>(
			getFilesUrl(''),
			file,
			{
				params: { folder },
				headers: { 'Content-Type': 'multipart/form-data' },
			}
		)
	},

	async addDirectory(folder: string) {
		return instance.post<string>(getFilesUrl(`/add-directory`), {
			folder,
		})
	},

	async deleteDirectory(folder: string) {
		return instance.delete(
			getFilesUrl(`/directory/${encodeURIComponent(folder)}`)
		)
	},

	async deleteFile(path: string) {
		return instance.delete(getFilesUrl(`/file/${encodeURIComponent(path)}`))
	},
}
