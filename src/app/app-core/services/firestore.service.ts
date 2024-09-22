import { ToastAppService } from './toastapp.service';

import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, addDoc } from '@angular/fire/firestore';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  constructor(private firestore: Firestore,
    private toastS: ToastAppService )
    {}

  // Método para buscar uma coleção de documentos
  getCollection<T>(collectionName: string): Observable<T[]> {
    const collectionRef = collection(this.firestore, collectionName);

    return collectionData(collectionRef, { idField: 'id' }).pipe(
      catchError((error) => {
        return throwError(() => this.processFail(error));
      })
    ) as Observable<T[]>;
  }

  async addDocument<T>(collectionName: string, data: any): Promise<void> {
    try {
      const collectionRef = collection(this.firestore, collectionName);
      await addDoc(collectionRef, data);
      console.log('Documento adicionado com sucesso!');
    } catch (error) {
      console.error('Erro ao adicionar documento:', error);
      throw new Error('Falha ao adicionar o documento no Firestore.');
    }
  }

   processFail(fail: any) {
    console.log(fail)
    this.toastS.error(fail.message, "Erro");
  }

}
