import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { CONTENT } from '../helper-files/contentDb';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json'})
  };

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getContent(): Observable<Content[]>{
    this.messageService.add("Content array loaded!")
    return this.http.get<Content[]>("api/content");
  }

  getGame(id: number): Observable<Content>{
    // this.messageService.removeLast()
    // this.messageService.add(`Content item added at ID: ${id}`)
    // return of(CONTENT[id])
    return this.http.get<Content>("api/content/" + id);
  }
  checkIndex(id: number): boolean{
    if(CONTENT[id]){
      return true
    } 
    this.messageService.removeLast()
    this.messageService.add(`Content couldn't be loaded from ID: ${id}`)
    return false
  }
  addContent(newContentItem: Content): Observable<Content>{
    this.messageService.clear()
    this.messageService.add("Added new item!")
    return this.http.post<Content>("api/content", newContentItem, this.httpOptions)
  }
  updateContent(contentItem: Content): Observable<any>{
    this.messageService.clear()
    this.messageService.add("Updated item!")
    return this.http.put("api/content", contentItem, this.httpOptions)
  }
}
  
