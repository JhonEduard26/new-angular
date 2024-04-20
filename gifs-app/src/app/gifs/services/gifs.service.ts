import { Injectable, inject } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import type { Gif, GiphyResult } from '../interfaces/gifs.interfaces'

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private _tagsHistory: string[] = []
  private readonly http = inject(HttpClient)
  private readonly baseUrl = 'https://api.giphy.com/v1/gifs'
  private readonly apiKey = '1Jua5nI07tRki50EhLuM08i2BFd0CBBu'
  public gifs: Gif[] = []

  constructor () {
    this.loadLocalStorage()
  }

  get tagsHistory (): string[] {
    return [...this._tagsHistory]
  }

  private organizeHistory (tag: string): void {
    tag = tag.toLowerCase()

    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag)
    }

    this._tagsHistory.unshift(tag)
    this._tagsHistory = this.tagsHistory.slice(0, 10)
    this.saveLocalStorage()
  }

  private saveLocalStorage (): void {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory))
  }

  private loadLocalStorage (): void {
    const history = localStorage.getItem('history')
    if (history === null) return

    this._tagsHistory = JSON.parse(history)

    if (this._tagsHistory.length === 0) return
    this.searchTag(this._tagsHistory[0])
  }

  searchTag (tag: string): void {
    if (tag.trim().length === 0) return

    this.organizeHistory(tag)

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('q', tag)
      .set('limit', '10')

    this.http.get<GiphyResult>(`${this.baseUrl}/search`, { params })
      .subscribe((response) => {
        this.gifs = response.data
      })
  }
}
